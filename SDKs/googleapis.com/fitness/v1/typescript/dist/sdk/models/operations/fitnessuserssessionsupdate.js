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
var FitnessUsersSessionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdatePathParams, _super);
    function FitnessUsersSessionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdatePathParams.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdatePathParams.prototype, "userId", void 0);
    return FitnessUsersSessionsUpdatePathParams;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdatePathParams };
var FitnessUsersSessionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateQueryParams, _super);
    function FitnessUsersSessionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersSessionsUpdateQueryParams;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateQueryParams };
var FitnessUsersSessionsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateSecurityOption1, _super);
    function FitnessUsersSessionsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsUpdateSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateSecurityOption1 };
var FitnessUsersSessionsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateSecurityOption2, _super);
    function FitnessUsersSessionsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersSessionsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersSessionsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersSessionsUpdateSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateSecurityOption2 };
var FitnessUsersSessionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateSecurity, _super);
    function FitnessUsersSessionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsUpdateSecurityOption1)
    ], FitnessUsersSessionsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersSessionsUpdateSecurityOption2)
    ], FitnessUsersSessionsUpdateSecurity.prototype, "option2", void 0);
    return FitnessUsersSessionsUpdateSecurity;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateSecurity };
var FitnessUsersSessionsUpdateRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateRequest, _super);
    function FitnessUsersSessionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsUpdatePathParams)
    ], FitnessUsersSessionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsUpdateQueryParams)
    ], FitnessUsersSessionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Session)
    ], FitnessUsersSessionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersSessionsUpdateSecurity)
    ], FitnessUsersSessionsUpdateRequest.prototype, "security", void 0);
    return FitnessUsersSessionsUpdateRequest;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateRequest };
var FitnessUsersSessionsUpdateResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersSessionsUpdateResponse, _super);
    function FitnessUsersSessionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersSessionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Session)
    ], FitnessUsersSessionsUpdateResponse.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersSessionsUpdateResponse.prototype, "statusCode", void 0);
    return FitnessUsersSessionsUpdateResponse;
}(SpeakeasyBase));
export { FitnessUsersSessionsUpdateResponse };
