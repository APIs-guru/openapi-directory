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
export var GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum;
(function (GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum) {
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Ok"] = "OK";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Cancelled"] = "CANCELLED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Unknown"] = "UNKNOWN";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["InvalidArgument"] = "INVALID_ARGUMENT";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["DeadlineExceeded"] = "DEADLINE_EXCEEDED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["NotFound"] = "NOT_FOUND";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["AlreadyExists"] = "ALREADY_EXISTS";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["PermissionDenied"] = "PERMISSION_DENIED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Unauthenticated"] = "UNAUTHENTICATED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["ResourceExhausted"] = "RESOURCE_EXHAUSTED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["FailedPrecondition"] = "FAILED_PRECONDITION";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Aborted"] = "ABORTED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["OutOfRange"] = "OUT_OF_RANGE";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Internal"] = "INTERNAL";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["Unavailable"] = "UNAVAILABLE";
    GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum["DataLoss"] = "DATA_LOSS";
})(GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum || (GoogleCloudAssetV1p4beta1AnalysisStateCodeEnum = {}));
// GoogleCloudAssetV1p4beta1AnalysisState
/**
 * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
**/
var GoogleCloudAssetV1p4beta1AnalysisState = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1p4beta1AnalysisState, _super);
    function GoogleCloudAssetV1p4beta1AnalysisState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1p4beta1AnalysisState.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GoogleCloudAssetV1p4beta1AnalysisState.prototype, "code", void 0);
    return GoogleCloudAssetV1p4beta1AnalysisState;
}(SpeakeasyBase));
export { GoogleCloudAssetV1p4beta1AnalysisState };
