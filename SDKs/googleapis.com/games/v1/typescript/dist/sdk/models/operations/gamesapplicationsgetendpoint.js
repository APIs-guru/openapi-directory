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
export var GamesApplicationsGetEndPointEndPointTypeEnum;
(function (GamesApplicationsGetEndPointEndPointTypeEnum) {
    GamesApplicationsGetEndPointEndPointTypeEnum["EndPointTypeUnspecified"] = "END_POINT_TYPE_UNSPECIFIED";
    GamesApplicationsGetEndPointEndPointTypeEnum["ProfileCreation"] = "PROFILE_CREATION";
    GamesApplicationsGetEndPointEndPointTypeEnum["ProfileSettings"] = "PROFILE_SETTINGS";
})(GamesApplicationsGetEndPointEndPointTypeEnum || (GamesApplicationsGetEndPointEndPointTypeEnum = {}));
var GamesApplicationsGetEndPointQueryParams = /** @class */ (function (_super) {
    __extends(GamesApplicationsGetEndPointQueryParams, _super);
    function GamesApplicationsGetEndPointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPointType" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "endPointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointQueryParams.prototype, "uploadProtocol", void 0);
    return GamesApplicationsGetEndPointQueryParams;
}(SpeakeasyBase));
export { GamesApplicationsGetEndPointQueryParams };
var GamesApplicationsGetEndPointSecurity = /** @class */ (function (_super) {
    __extends(GamesApplicationsGetEndPointSecurity, _super);
    function GamesApplicationsGetEndPointSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesApplicationsGetEndPointSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesApplicationsGetEndPointSecurity.prototype, "oauth2c", void 0);
    return GamesApplicationsGetEndPointSecurity;
}(SpeakeasyBase));
export { GamesApplicationsGetEndPointSecurity };
var GamesApplicationsGetEndPointRequest = /** @class */ (function (_super) {
    __extends(GamesApplicationsGetEndPointRequest, _super);
    function GamesApplicationsGetEndPointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesApplicationsGetEndPointQueryParams)
    ], GamesApplicationsGetEndPointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesApplicationsGetEndPointSecurity)
    ], GamesApplicationsGetEndPointRequest.prototype, "security", void 0);
    return GamesApplicationsGetEndPointRequest;
}(SpeakeasyBase));
export { GamesApplicationsGetEndPointRequest };
var GamesApplicationsGetEndPointResponse = /** @class */ (function (_super) {
    __extends(GamesApplicationsGetEndPointResponse, _super);
    function GamesApplicationsGetEndPointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesApplicationsGetEndPointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EndPoint)
    ], GamesApplicationsGetEndPointResponse.prototype, "endPoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesApplicationsGetEndPointResponse.prototype, "statusCode", void 0);
    return GamesApplicationsGetEndPointResponse;
}(SpeakeasyBase));
export { GamesApplicationsGetEndPointResponse };
