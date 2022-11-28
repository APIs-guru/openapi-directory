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
import { BigTableIoDetails } from "./bigtableiodetails";
import { BigQueryIoDetails } from "./bigqueryiodetails";
import { DatastoreIoDetails } from "./datastoreiodetails";
import { FileIoDetails } from "./fileiodetails";
import { PubSubIoDetails } from "./pubsubiodetails";
import { SDKVersion } from "./sdkversion";
import { SpannerIoDetails } from "./spanneriodetails";
// JobMetadata
/**
 * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
**/
var JobMetadata = /** @class */ (function (_super) {
    __extends(JobMetadata, _super);
    function JobMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigTableDetails", elemType: BigTableIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "bigTableDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDetails", elemType: BigQueryIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "bigqueryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastoreDetails", elemType: DatastoreIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "datastoreDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileDetails", elemType: FileIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "fileDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubDetails", elemType: PubSubIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "pubsubDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdkVersion" }),
        __metadata("design:type", SDKVersion)
    ], JobMetadata.prototype, "sdkVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spannerDetails", elemType: SpannerIoDetails }),
        __metadata("design:type", Array)
    ], JobMetadata.prototype, "spannerDetails", void 0);
    return JobMetadata;
}(SpeakeasyBase));
export { JobMetadata };
