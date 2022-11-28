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
import * as shared from "../shared";
var UpdateUserPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserPolicyPathParams, _super);
    function UpdateUserPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserPolicyPathParams.prototype, "userId", void 0);
    return UpdateUserPolicyPathParams;
}(SpeakeasyBase));
export { UpdateUserPolicyPathParams };
var UpdateUserPolicyRequestsInput = /** @class */ (function (_super) {
    __extends(UpdateUserPolicyRequestsInput, _super);
    function UpdateUserPolicyRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UserPolicyInput)
    ], UpdateUserPolicyRequestsInput.prototype, "userPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserPolicyInput)
    ], UpdateUserPolicyRequestsInput.prototype, "userPolicy1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UserPolicyInput)
    ], UpdateUserPolicyRequestsInput.prototype, "userPolicy2", void 0);
    return UpdateUserPolicyRequestsInput;
}(SpeakeasyBase));
export { UpdateUserPolicyRequestsInput };
var UpdateUserPolicySecurity = /** @class */ (function (_super) {
    __extends(UpdateUserPolicySecurity, _super);
    function UpdateUserPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateUserPolicySecurity.prototype, "customAuthentication", void 0);
    return UpdateUserPolicySecurity;
}(SpeakeasyBase));
export { UpdateUserPolicySecurity };
var UpdateUserPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateUserPolicyRequest, _super);
    function UpdateUserPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserPolicyPathParams)
    ], UpdateUserPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserPolicyRequestsInput)
    ], UpdateUserPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserPolicySecurity)
    ], UpdateUserPolicyRequest.prototype, "security", void 0);
    return UpdateUserPolicyRequest;
}(SpeakeasyBase));
export { UpdateUserPolicyRequest };
var UpdateUserPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateUserPolicyResponse, _super);
    function UpdateUserPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateUserPolicyResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserPolicyResponse.prototype, "statusCode", void 0);
    return UpdateUserPolicyResponse;
}(SpeakeasyBase));
export { UpdateUserPolicyResponse };
