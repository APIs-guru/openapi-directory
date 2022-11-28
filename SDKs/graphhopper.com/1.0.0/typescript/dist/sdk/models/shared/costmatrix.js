var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// CostMatrixDataInfo
/**
 * Additional information for your request
**/
var CostMatrixDataInfo = /** @class */ (function (_super) {
    __extends(CostMatrixDataInfo, _super);
    function CostMatrixDataInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyrights" }),
        __metadata("design:type", Array)
    ], CostMatrixDataInfo.prototype, "copyrights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=took" }),
        __metadata("design:type", Number)
    ], CostMatrixDataInfo.prototype, "took", void 0);
    return CostMatrixDataInfo;
}(SpeakeasyBase));
export { CostMatrixDataInfo };
// CostMatrixData
/**
 * JSON data of matrix response
**/
var CostMatrixData = /** @class */ (function (_super) {
    __extends(CostMatrixData, _super);
    function CostMatrixData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distances" }),
        __metadata("design:type", Array)
    ], CostMatrixData.prototype, "distances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", CostMatrixDataInfo)
    ], CostMatrixData.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=times" }),
        __metadata("design:type", Array)
    ], CostMatrixData.prototype, "times", void 0);
    return CostMatrixData;
}(SpeakeasyBase));
export { CostMatrixData };
export var CostMatrixTypeEnum;
(function (CostMatrixTypeEnum) {
    CostMatrixTypeEnum["Default"] = "default";
    CostMatrixTypeEnum["Google"] = "google";
})(CostMatrixTypeEnum || (CostMatrixTypeEnum = {}));
var CostMatrix = /** @class */ (function (_super) {
    __extends(CostMatrix, _super);
    function CostMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CostMatrixData)
    ], CostMatrix.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_ids" }),
        __metadata("design:type", Array)
    ], CostMatrix.prototype, "locationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], CostMatrix.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CostMatrix.prototype, "type", void 0);
    return CostMatrix;
}(SpeakeasyBase));
export { CostMatrix };
