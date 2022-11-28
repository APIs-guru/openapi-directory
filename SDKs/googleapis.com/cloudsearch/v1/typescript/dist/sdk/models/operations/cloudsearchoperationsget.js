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
var CloudsearchOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetPathParams, _super);
    function CloudsearchOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetPathParams.prototype, "name", void 0);
    return CloudsearchOperationsGetPathParams;
}(SpeakeasyBase));
export { CloudsearchOperationsGetPathParams };
var CloudsearchOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetQueryParams, _super);
    function CloudsearchOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchOperationsGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchOperationsGetQueryParams };
var CloudsearchOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption1, _super);
    function CloudsearchOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption1 };
var CloudsearchOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption2, _super);
    function CloudsearchOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption2 };
var CloudsearchOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption3, _super);
    function CloudsearchOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption3 };
var CloudsearchOperationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption4, _super);
    function CloudsearchOperationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption4;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption4 };
var CloudsearchOperationsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption5, _super);
    function CloudsearchOperationsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption5.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption5;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption5 };
var CloudsearchOperationsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurityOption6, _super);
    function CloudsearchOperationsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchOperationsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchOperationsGetSecurityOption6.prototype, "oauth2c", void 0);
    return CloudsearchOperationsGetSecurityOption6;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurityOption6 };
var CloudsearchOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetSecurity, _super);
    function CloudsearchOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption1)
    ], CloudsearchOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption2)
    ], CloudsearchOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption3)
    ], CloudsearchOperationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption4)
    ], CloudsearchOperationsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption5)
    ], CloudsearchOperationsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchOperationsGetSecurityOption6)
    ], CloudsearchOperationsGetSecurity.prototype, "option6", void 0);
    return CloudsearchOperationsGetSecurity;
}(SpeakeasyBase));
export { CloudsearchOperationsGetSecurity };
var CloudsearchOperationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetRequest, _super);
    function CloudsearchOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchOperationsGetPathParams)
    ], CloudsearchOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchOperationsGetQueryParams)
    ], CloudsearchOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchOperationsGetSecurity)
    ], CloudsearchOperationsGetRequest.prototype, "security", void 0);
    return CloudsearchOperationsGetRequest;
}(SpeakeasyBase));
export { CloudsearchOperationsGetRequest };
var CloudsearchOperationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchOperationsGetResponse, _super);
    function CloudsearchOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchOperationsGetResponse.prototype, "statusCode", void 0);
    return CloudsearchOperationsGetResponse;
}(SpeakeasyBase));
export { CloudsearchOperationsGetResponse };
