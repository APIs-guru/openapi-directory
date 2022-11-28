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
var PlusCommentsGetPathParams = /** @class */ (function (_super) {
    __extends(PlusCommentsGetPathParams, _super);
    function PlusCommentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], PlusCommentsGetPathParams.prototype, "commentId", void 0);
    return PlusCommentsGetPathParams;
}(SpeakeasyBase));
export { PlusCommentsGetPathParams };
var PlusCommentsGetQueryParams = /** @class */ (function (_super) {
    __extends(PlusCommentsGetQueryParams, _super);
    function PlusCommentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusCommentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusCommentsGetQueryParams.prototype, "userIp", void 0);
    return PlusCommentsGetQueryParams;
}(SpeakeasyBase));
export { PlusCommentsGetQueryParams };
var PlusCommentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusCommentsGetSecurityOption1, _super);
    function PlusCommentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusCommentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusCommentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PlusCommentsGetSecurityOption1;
}(SpeakeasyBase));
export { PlusCommentsGetSecurityOption1 };
var PlusCommentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusCommentsGetSecurityOption2, _super);
    function PlusCommentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusCommentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusCommentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PlusCommentsGetSecurityOption2;
}(SpeakeasyBase));
export { PlusCommentsGetSecurityOption2 };
var PlusCommentsGetSecurity = /** @class */ (function (_super) {
    __extends(PlusCommentsGetSecurity, _super);
    function PlusCommentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusCommentsGetSecurityOption1)
    ], PlusCommentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusCommentsGetSecurityOption2)
    ], PlusCommentsGetSecurity.prototype, "option2", void 0);
    return PlusCommentsGetSecurity;
}(SpeakeasyBase));
export { PlusCommentsGetSecurity };
var PlusCommentsGetRequest = /** @class */ (function (_super) {
    __extends(PlusCommentsGetRequest, _super);
    function PlusCommentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusCommentsGetPathParams)
    ], PlusCommentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusCommentsGetQueryParams)
    ], PlusCommentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusCommentsGetSecurity)
    ], PlusCommentsGetRequest.prototype, "security", void 0);
    return PlusCommentsGetRequest;
}(SpeakeasyBase));
export { PlusCommentsGetRequest };
var PlusCommentsGetResponse = /** @class */ (function (_super) {
    __extends(PlusCommentsGetResponse, _super);
    function PlusCommentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], PlusCommentsGetResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlusCommentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlusCommentsGetResponse.prototype, "statusCode", void 0);
    return PlusCommentsGetResponse;
}(SpeakeasyBase));
export { PlusCommentsGetResponse };
