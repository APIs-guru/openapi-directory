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
var DnsPoliciesPatchPathParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchPathParams, _super);
    function DnsPoliciesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policy" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchPathParams.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchPathParams.prototype, "project", void 0);
    return DnsPoliciesPatchPathParams;
}(SpeakeasyBase));
export { DnsPoliciesPatchPathParams };
var DnsPoliciesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchQueryParams, _super);
    function DnsPoliciesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsPoliciesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsPoliciesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DnsPoliciesPatchQueryParams;
}(SpeakeasyBase));
export { DnsPoliciesPatchQueryParams };
var DnsPoliciesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchSecurityOption1, _super);
    function DnsPoliciesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DnsPoliciesPatchSecurityOption1;
}(SpeakeasyBase));
export { DnsPoliciesPatchSecurityOption1 };
var DnsPoliciesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchSecurityOption2, _super);
    function DnsPoliciesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DnsPoliciesPatchSecurityOption2;
}(SpeakeasyBase));
export { DnsPoliciesPatchSecurityOption2 };
var DnsPoliciesPatchSecurity = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchSecurity, _super);
    function DnsPoliciesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesPatchSecurityOption1)
    ], DnsPoliciesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesPatchSecurityOption2)
    ], DnsPoliciesPatchSecurity.prototype, "option2", void 0);
    return DnsPoliciesPatchSecurity;
}(SpeakeasyBase));
export { DnsPoliciesPatchSecurity };
var DnsPoliciesPatchRequest = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchRequest, _super);
    function DnsPoliciesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesPatchPathParams)
    ], DnsPoliciesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesPatchQueryParams)
    ], DnsPoliciesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Policy)
    ], DnsPoliciesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesPatchSecurity)
    ], DnsPoliciesPatchRequest.prototype, "security", void 0);
    return DnsPoliciesPatchRequest;
}(SpeakeasyBase));
export { DnsPoliciesPatchRequest };
var DnsPoliciesPatchResponse = /** @class */ (function (_super) {
    __extends(DnsPoliciesPatchResponse, _super);
    function DnsPoliciesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsPoliciesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PoliciesPatchResponse)
    ], DnsPoliciesPatchResponse.prototype, "policiesPatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsPoliciesPatchResponse.prototype, "statusCode", void 0);
    return DnsPoliciesPatchResponse;
}(SpeakeasyBase));
export { DnsPoliciesPatchResponse };
