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
var MirrorTimelineGetPathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetPathParams, _super);
    function MirrorTimelineGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetPathParams.prototype, "id", void 0);
    return MirrorTimelineGetPathParams;
}(SpeakeasyBase));
export { MirrorTimelineGetPathParams };
var MirrorTimelineGetQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetQueryParams, _super);
    function MirrorTimelineGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineGetQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineGetQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineGetQueryParams };
var MirrorTimelineGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetSecurityOption1, _super);
    function MirrorTimelineGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineGetSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorTimelineGetSecurityOption1;
}(SpeakeasyBase));
export { MirrorTimelineGetSecurityOption1 };
var MirrorTimelineGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetSecurityOption2, _super);
    function MirrorTimelineGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineGetSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorTimelineGetSecurityOption2;
}(SpeakeasyBase));
export { MirrorTimelineGetSecurityOption2 };
var MirrorTimelineGetSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetSecurity, _super);
    function MirrorTimelineGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineGetSecurityOption1)
    ], MirrorTimelineGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineGetSecurityOption2)
    ], MirrorTimelineGetSecurity.prototype, "option2", void 0);
    return MirrorTimelineGetSecurity;
}(SpeakeasyBase));
export { MirrorTimelineGetSecurity };
var MirrorTimelineGetRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetRequest, _super);
    function MirrorTimelineGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineGetPathParams)
    ], MirrorTimelineGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineGetQueryParams)
    ], MirrorTimelineGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineGetSecurity)
    ], MirrorTimelineGetRequest.prototype, "security", void 0);
    return MirrorTimelineGetRequest;
}(SpeakeasyBase));
export { MirrorTimelineGetRequest };
var MirrorTimelineGetResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineGetResponse, _super);
    function MirrorTimelineGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineGetResponse.prototype, "statusCode", void 0);
    return MirrorTimelineGetResponse;
}(SpeakeasyBase));
export { MirrorTimelineGetResponse };
