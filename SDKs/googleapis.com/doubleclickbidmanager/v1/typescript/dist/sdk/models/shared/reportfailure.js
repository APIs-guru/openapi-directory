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
export var ReportFailureErrorCodeEnum;
(function (ReportFailureErrorCodeEnum) {
    ReportFailureErrorCodeEnum["AuthenticationError"] = "AUTHENTICATION_ERROR";
    ReportFailureErrorCodeEnum["UnauthorizedApiAccess"] = "UNAUTHORIZED_API_ACCESS";
    ReportFailureErrorCodeEnum["ServerError"] = "SERVER_ERROR";
    ReportFailureErrorCodeEnum["ValidationError"] = "VALIDATION_ERROR";
    ReportFailureErrorCodeEnum["ReportingFatalError"] = "REPORTING_FATAL_ERROR";
    ReportFailureErrorCodeEnum["ReportingTransientError"] = "REPORTING_TRANSIENT_ERROR";
    ReportFailureErrorCodeEnum["ReportingImcompatibleMetrics"] = "REPORTING_IMCOMPATIBLE_METRICS";
    ReportFailureErrorCodeEnum["ReportingIllegalFilename"] = "REPORTING_ILLEGAL_FILENAME";
    ReportFailureErrorCodeEnum["ReportingQueryNotFound"] = "REPORTING_QUERY_NOT_FOUND";
    ReportFailureErrorCodeEnum["ReportingBucketNotFound"] = "REPORTING_BUCKET_NOT_FOUND";
    ReportFailureErrorCodeEnum["ReportingCreateBucketFailed"] = "REPORTING_CREATE_BUCKET_FAILED";
    ReportFailureErrorCodeEnum["ReportingDeleteBucketFailed"] = "REPORTING_DELETE_BUCKET_FAILED";
    ReportFailureErrorCodeEnum["ReportingUpdateBucketPermissionFailed"] = "REPORTING_UPDATE_BUCKET_PERMISSION_FAILED";
    ReportFailureErrorCodeEnum["ReportingWriteBucketObjectFailed"] = "REPORTING_WRITE_BUCKET_OBJECT_FAILED";
    ReportFailureErrorCodeEnum["DeprecatedReportingInvalidQuery"] = "DEPRECATED_REPORTING_INVALID_QUERY";
    ReportFailureErrorCodeEnum["ReportingInvalidQueryTooManyUnfilteredLargeGroupBys"] = "REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS";
    ReportFailureErrorCodeEnum["ReportingInvalidQueryTitleMissing"] = "REPORTING_INVALID_QUERY_TITLE_MISSING";
    ReportFailureErrorCodeEnum["ReportingInvalidQueryMissingPartnerAndAdvertiserFilters"] = "REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS";
})(ReportFailureErrorCodeEnum || (ReportFailureErrorCodeEnum = {}));
// ReportFailure
/**
 * An explanation of a report failure.
**/
var ReportFailure = /** @class */ (function (_super) {
    __extends(ReportFailure, _super);
    function ReportFailure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], ReportFailure.prototype, "errorCode", void 0);
    return ReportFailure;
}(SpeakeasyBase));
export { ReportFailure };
