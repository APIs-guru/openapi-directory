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
var MirrorLocationsGetPathParams = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetPathParams, _super);
    function MirrorLocationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetPathParams.prototype, "id", void 0);
    return MirrorLocationsGetPathParams;
}(SpeakeasyBase));
export { MirrorLocationsGetPathParams };
var MirrorLocationsGetQueryParams = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetQueryParams, _super);
    function MirrorLocationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorLocationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorLocationsGetQueryParams.prototype, "userIp", void 0);
    return MirrorLocationsGetQueryParams;
}(SpeakeasyBase));
export { MirrorLocationsGetQueryParams };
var MirrorLocationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurityOption1, _super);
    function MirrorLocationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorLocationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorLocationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorLocationsGetSecurityOption1;
}(SpeakeasyBase));
export { MirrorLocationsGetSecurityOption1 };
var MirrorLocationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurityOption2, _super);
    function MirrorLocationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorLocationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorLocationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorLocationsGetSecurityOption2;
}(SpeakeasyBase));
export { MirrorLocationsGetSecurityOption2 };
var MirrorLocationsGetSecurity = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetSecurity, _super);
    function MirrorLocationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorLocationsGetSecurityOption1)
    ], MirrorLocationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorLocationsGetSecurityOption2)
    ], MirrorLocationsGetSecurity.prototype, "option2", void 0);
    return MirrorLocationsGetSecurity;
}(SpeakeasyBase));
export { MirrorLocationsGetSecurity };
var MirrorLocationsGetRequest = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetRequest, _super);
    function MirrorLocationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorLocationsGetPathParams)
    ], MirrorLocationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorLocationsGetQueryParams)
    ], MirrorLocationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorLocationsGetSecurity)
    ], MirrorLocationsGetRequest.prototype, "security", void 0);
    return MirrorLocationsGetRequest;
}(SpeakeasyBase));
export { MirrorLocationsGetRequest };
var MirrorLocationsGetResponse = /** @class */ (function (_super) {
    __extends(MirrorLocationsGetResponse, _super);
    function MirrorLocationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorLocationsGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorLocationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorLocationsGetResponse.prototype, "statusCode", void 0);
    return MirrorLocationsGetResponse;
}(SpeakeasyBase));
export { MirrorLocationsGetResponse };
