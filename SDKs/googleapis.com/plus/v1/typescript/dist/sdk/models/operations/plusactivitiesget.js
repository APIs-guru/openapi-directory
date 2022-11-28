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
var PlusActivitiesGetPathParams = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetPathParams, _super);
    function PlusActivitiesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetPathParams.prototype, "activityId", void 0);
    return PlusActivitiesGetPathParams;
}(SpeakeasyBase));
export { PlusActivitiesGetPathParams };
var PlusActivitiesGetQueryParams = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetQueryParams, _super);
    function PlusActivitiesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusActivitiesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusActivitiesGetQueryParams.prototype, "userIp", void 0);
    return PlusActivitiesGetQueryParams;
}(SpeakeasyBase));
export { PlusActivitiesGetQueryParams };
var PlusActivitiesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetSecurityOption1, _super);
    function PlusActivitiesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesGetSecurityOption1.prototype, "oauth2c", void 0);
    return PlusActivitiesGetSecurityOption1;
}(SpeakeasyBase));
export { PlusActivitiesGetSecurityOption1 };
var PlusActivitiesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetSecurityOption2, _super);
    function PlusActivitiesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusActivitiesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusActivitiesGetSecurityOption2.prototype, "oauth2c", void 0);
    return PlusActivitiesGetSecurityOption2;
}(SpeakeasyBase));
export { PlusActivitiesGetSecurityOption2 };
var PlusActivitiesGetSecurity = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetSecurity, _super);
    function PlusActivitiesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesGetSecurityOption1)
    ], PlusActivitiesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PlusActivitiesGetSecurityOption2)
    ], PlusActivitiesGetSecurity.prototype, "option2", void 0);
    return PlusActivitiesGetSecurity;
}(SpeakeasyBase));
export { PlusActivitiesGetSecurity };
var PlusActivitiesGetRequest = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetRequest, _super);
    function PlusActivitiesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusActivitiesGetPathParams)
    ], PlusActivitiesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusActivitiesGetQueryParams)
    ], PlusActivitiesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlusActivitiesGetSecurity)
    ], PlusActivitiesGetRequest.prototype, "security", void 0);
    return PlusActivitiesGetRequest;
}(SpeakeasyBase));
export { PlusActivitiesGetRequest };
var PlusActivitiesGetResponse = /** @class */ (function (_super) {
    __extends(PlusActivitiesGetResponse, _super);
    function PlusActivitiesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Activity)
    ], PlusActivitiesGetResponse.prototype, "activity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlusActivitiesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlusActivitiesGetResponse.prototype, "statusCode", void 0);
    return PlusActivitiesGetResponse;
}(SpeakeasyBase));
export { PlusActivitiesGetResponse };
