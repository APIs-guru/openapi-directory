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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ErrorCategoryHttpStatusEnum;
(function (ErrorCategoryHttpStatusEnum) {
    ErrorCategoryHttpStatusEnum["Continue"] = "CONTINUE";
    ErrorCategoryHttpStatusEnum["SwitchingProtocols"] = "SWITCHING_PROTOCOLS";
    ErrorCategoryHttpStatusEnum["Processing"] = "PROCESSING";
    ErrorCategoryHttpStatusEnum["Ok"] = "OK";
    ErrorCategoryHttpStatusEnum["Created"] = "CREATED";
    ErrorCategoryHttpStatusEnum["Accepted"] = "ACCEPTED";
    ErrorCategoryHttpStatusEnum["NonAuthoritativeInformation"] = "NON_AUTHORITATIVE_INFORMATION";
    ErrorCategoryHttpStatusEnum["NoContent"] = "NO_CONTENT";
    ErrorCategoryHttpStatusEnum["ResetContent"] = "RESET_CONTENT";
    ErrorCategoryHttpStatusEnum["PartialContent"] = "PARTIAL_CONTENT";
    ErrorCategoryHttpStatusEnum["MultiStatus"] = "MULTI_STATUS";
    ErrorCategoryHttpStatusEnum["AlreadyReported"] = "ALREADY_REPORTED";
    ErrorCategoryHttpStatusEnum["ImUsed"] = "IM_USED";
    ErrorCategoryHttpStatusEnum["MultipleChoices"] = "MULTIPLE_CHOICES";
    ErrorCategoryHttpStatusEnum["MovedPermanently"] = "MOVED_PERMANENTLY";
    ErrorCategoryHttpStatusEnum["Found"] = "FOUND";
    ErrorCategoryHttpStatusEnum["SeeOther"] = "SEE_OTHER";
    ErrorCategoryHttpStatusEnum["NotModified"] = "NOT_MODIFIED";
    ErrorCategoryHttpStatusEnum["UseProxy"] = "USE_PROXY";
    ErrorCategoryHttpStatusEnum["TemporaryRedirect"] = "TEMPORARY_REDIRECT";
    ErrorCategoryHttpStatusEnum["PermanentRedirect"] = "PERMANENT_REDIRECT";
    ErrorCategoryHttpStatusEnum["BadRequest"] = "BAD_REQUEST";
    ErrorCategoryHttpStatusEnum["Unauthorized"] = "UNAUTHORIZED";
    ErrorCategoryHttpStatusEnum["PaymentRequired"] = "PAYMENT_REQUIRED";
    ErrorCategoryHttpStatusEnum["Forbidden"] = "FORBIDDEN";
    ErrorCategoryHttpStatusEnum["NotFound"] = "NOT_FOUND";
    ErrorCategoryHttpStatusEnum["MethodNotAllowed"] = "METHOD_NOT_ALLOWED";
    ErrorCategoryHttpStatusEnum["NotAcceptable"] = "NOT_ACCEPTABLE";
    ErrorCategoryHttpStatusEnum["ProxyAuthenticationRequired"] = "PROXY_AUTHENTICATION_REQUIRED";
    ErrorCategoryHttpStatusEnum["RequestTimeout"] = "REQUEST_TIMEOUT";
    ErrorCategoryHttpStatusEnum["Conflict"] = "CONFLICT";
    ErrorCategoryHttpStatusEnum["Gone"] = "GONE";
    ErrorCategoryHttpStatusEnum["LengthRequired"] = "LENGTH_REQUIRED";
    ErrorCategoryHttpStatusEnum["PreconditionFailed"] = "PRECONDITION_FAILED";
    ErrorCategoryHttpStatusEnum["RequestEntityTooLarge"] = "REQUEST_ENTITY_TOO_LARGE";
    ErrorCategoryHttpStatusEnum["RequestUriTooLong"] = "REQUEST_URI_TOO_LONG";
    ErrorCategoryHttpStatusEnum["UnsupportedMediaType"] = "UNSUPPORTED_MEDIA_TYPE";
    ErrorCategoryHttpStatusEnum["RequestedRangeNotSatisfiable"] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    ErrorCategoryHttpStatusEnum["ExpectationFailed"] = "EXPECTATION_FAILED";
    ErrorCategoryHttpStatusEnum["ImATeapot"] = "IM_A_TEAPOT";
    ErrorCategoryHttpStatusEnum["MisdirectedRequest"] = "MISDIRECTED_REQUEST";
    ErrorCategoryHttpStatusEnum["UnprocessableEntity"] = "UNPROCESSABLE_ENTITY";
    ErrorCategoryHttpStatusEnum["Locked"] = "LOCKED";
    ErrorCategoryHttpStatusEnum["FailedDependency"] = "FAILED_DEPENDENCY";
    ErrorCategoryHttpStatusEnum["UpgradeRequired"] = "UPGRADE_REQUIRED";
    ErrorCategoryHttpStatusEnum["PreconditionRequired"] = "PRECONDITION_REQUIRED";
    ErrorCategoryHttpStatusEnum["TooManyRequests"] = "TOO_MANY_REQUESTS";
    ErrorCategoryHttpStatusEnum["RequestHeadersFieldsTooLarge"] = "REQUEST_HEADERS_FIELDS_TOO_LARGE";
    ErrorCategoryHttpStatusEnum["InternalStaleServiceDiscovery"] = "INTERNAL_STALE_SERVICE_DISCOVERY";
    ErrorCategoryHttpStatusEnum["UnavailableForLegalReasons"] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    ErrorCategoryHttpStatusEnum["MigrationInProgress"] = "MIGRATION_IN_PROGRESS";
    ErrorCategoryHttpStatusEnum["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    ErrorCategoryHttpStatusEnum["NotImplemented"] = "NOT_IMPLEMENTED";
    ErrorCategoryHttpStatusEnum["BadGateway"] = "BAD_GATEWAY";
    ErrorCategoryHttpStatusEnum["ServiceUnavailable"] = "SERVICE_UNAVAILABLE";
    ErrorCategoryHttpStatusEnum["GatewayTimeout"] = "GATEWAY_TIMEOUT";
    ErrorCategoryHttpStatusEnum["HttpVersionNotSupported"] = "HTTP_VERSION_NOT_SUPPORTED";
    ErrorCategoryHttpStatusEnum["VariantAlsoNegotiates"] = "VARIANT_ALSO_NEGOTIATES";
    ErrorCategoryHttpStatusEnum["InsufficientStorage"] = "INSUFFICIENT_STORAGE";
    ErrorCategoryHttpStatusEnum["LoopDetected"] = "LOOP_DETECTED";
    ErrorCategoryHttpStatusEnum["NotExtended"] = "NOT_EXTENDED";
    ErrorCategoryHttpStatusEnum["NetworkAuthenticationRequired"] = "NETWORK_AUTHENTICATION_REQUIRED";
})(ErrorCategoryHttpStatusEnum || (ErrorCategoryHttpStatusEnum = {}));
var ErrorCategory = /** @class */ (function (_super) {
    __extends(ErrorCategory, _super);
    function ErrorCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=httpStatus" }),
        __metadata("design:type", String)
    ], ErrorCategory.prototype, "httpStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ErrorCategory.prototype, "name", void 0);
    return ErrorCategory;
}(SpeakeasyBase));
export { ErrorCategory };
