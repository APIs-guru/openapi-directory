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
import { DatafeedStatusError } from "./datafeedstatuserror";
// DatafeedStatus
/**
 * The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
**/
var DatafeedStatus = /** @class */ (function (_super) {
    __extends(DatafeedStatus, _super);
    function DatafeedStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datafeedId" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "datafeedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: DatafeedStatusError }),
        __metadata("design:type", Array)
    ], DatafeedStatus.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedLabel" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "feedLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsTotal" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "itemsTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsValid" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "itemsValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUploadDate" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "lastUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingStatus" }),
        __metadata("design:type", String)
    ], DatafeedStatus.prototype, "processingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: DatafeedStatusError }),
        __metadata("design:type", Array)
    ], DatafeedStatus.prototype, "warnings", void 0);
    return DatafeedStatus;
}(SpeakeasyBase));
export { DatafeedStatus };
