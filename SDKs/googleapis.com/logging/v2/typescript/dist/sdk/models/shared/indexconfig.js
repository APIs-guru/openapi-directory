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
export var IndexConfigTypeEnum;
(function (IndexConfigTypeEnum) {
    IndexConfigTypeEnum["IndexTypeUnspecified"] = "INDEX_TYPE_UNSPECIFIED";
    IndexConfigTypeEnum["IndexTypeString"] = "INDEX_TYPE_STRING";
    IndexConfigTypeEnum["IndexTypeInteger"] = "INDEX_TYPE_INTEGER";
})(IndexConfigTypeEnum || (IndexConfigTypeEnum = {}));
// IndexConfig
/**
 * Configuration for an indexed field.
**/
var IndexConfig = /** @class */ (function (_super) {
    __extends(IndexConfig, _super);
    function IndexConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], IndexConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldPath" }),
        __metadata("design:type", String)
    ], IndexConfig.prototype, "fieldPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IndexConfig.prototype, "type", void 0);
    return IndexConfig;
}(SpeakeasyBase));
export { IndexConfig };
// IndexConfigInput
/**
 * Configuration for an indexed field.
**/
var IndexConfigInput = /** @class */ (function (_super) {
    __extends(IndexConfigInput, _super);
    function IndexConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldPath" }),
        __metadata("design:type", String)
    ], IndexConfigInput.prototype, "fieldPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IndexConfigInput.prototype, "type", void 0);
    return IndexConfigInput;
}(SpeakeasyBase));
export { IndexConfigInput };
