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
export var IamPolicyAnalysisStateCodeEnum;
(function (IamPolicyAnalysisStateCodeEnum) {
    IamPolicyAnalysisStateCodeEnum["Ok"] = "OK";
    IamPolicyAnalysisStateCodeEnum["Cancelled"] = "CANCELLED";
    IamPolicyAnalysisStateCodeEnum["Unknown"] = "UNKNOWN";
    IamPolicyAnalysisStateCodeEnum["InvalidArgument"] = "INVALID_ARGUMENT";
    IamPolicyAnalysisStateCodeEnum["DeadlineExceeded"] = "DEADLINE_EXCEEDED";
    IamPolicyAnalysisStateCodeEnum["NotFound"] = "NOT_FOUND";
    IamPolicyAnalysisStateCodeEnum["AlreadyExists"] = "ALREADY_EXISTS";
    IamPolicyAnalysisStateCodeEnum["PermissionDenied"] = "PERMISSION_DENIED";
    IamPolicyAnalysisStateCodeEnum["Unauthenticated"] = "UNAUTHENTICATED";
    IamPolicyAnalysisStateCodeEnum["ResourceExhausted"] = "RESOURCE_EXHAUSTED";
    IamPolicyAnalysisStateCodeEnum["FailedPrecondition"] = "FAILED_PRECONDITION";
    IamPolicyAnalysisStateCodeEnum["Aborted"] = "ABORTED";
    IamPolicyAnalysisStateCodeEnum["OutOfRange"] = "OUT_OF_RANGE";
    IamPolicyAnalysisStateCodeEnum["Unimplemented"] = "UNIMPLEMENTED";
    IamPolicyAnalysisStateCodeEnum["Internal"] = "INTERNAL";
    IamPolicyAnalysisStateCodeEnum["Unavailable"] = "UNAVAILABLE";
    IamPolicyAnalysisStateCodeEnum["DataLoss"] = "DATA_LOSS";
})(IamPolicyAnalysisStateCodeEnum || (IamPolicyAnalysisStateCodeEnum = {}));
// IamPolicyAnalysisState
/**
 * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
**/
var IamPolicyAnalysisState = /** @class */ (function (_super) {
    __extends(IamPolicyAnalysisState, _super);
    function IamPolicyAnalysisState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], IamPolicyAnalysisState.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], IamPolicyAnalysisState.prototype, "code", void 0);
    return IamPolicyAnalysisState;
}(SpeakeasyBase));
export { IamPolicyAnalysisState };
