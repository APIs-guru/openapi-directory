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
var DriveDrivesHidePathParams = /** @class */ (function (_super) {
    __extends(DriveDrivesHidePathParams, _super);
    function DriveDrivesHidePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=driveId" }),
        __metadata("design:type", String)
    ], DriveDrivesHidePathParams.prototype, "driveId", void 0);
    return DriveDrivesHidePathParams;
}(SpeakeasyBase));
export { DriveDrivesHidePathParams };
var DriveDrivesHideQueryParams = /** @class */ (function (_super) {
    __extends(DriveDrivesHideQueryParams, _super);
    function DriveDrivesHideQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveDrivesHideQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveDrivesHideQueryParams.prototype, "userIp", void 0);
    return DriveDrivesHideQueryParams;
}(SpeakeasyBase));
export { DriveDrivesHideQueryParams };
var DriveDrivesHideSecurity = /** @class */ (function (_super) {
    __extends(DriveDrivesHideSecurity, _super);
    function DriveDrivesHideSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveDrivesHideSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveDrivesHideSecurity.prototype, "oauth2c", void 0);
    return DriveDrivesHideSecurity;
}(SpeakeasyBase));
export { DriveDrivesHideSecurity };
var DriveDrivesHideRequest = /** @class */ (function (_super) {
    __extends(DriveDrivesHideRequest, _super);
    function DriveDrivesHideRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveDrivesHidePathParams)
    ], DriveDrivesHideRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveDrivesHideQueryParams)
    ], DriveDrivesHideRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveDrivesHideSecurity)
    ], DriveDrivesHideRequest.prototype, "security", void 0);
    return DriveDrivesHideRequest;
}(SpeakeasyBase));
export { DriveDrivesHideRequest };
var DriveDrivesHideResponse = /** @class */ (function (_super) {
    __extends(DriveDrivesHideResponse, _super);
    function DriveDrivesHideResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveDrivesHideResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Drive)
    ], DriveDrivesHideResponse.prototype, "drive", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveDrivesHideResponse.prototype, "statusCode", void 0);
    return DriveDrivesHideResponse;
}(SpeakeasyBase));
export { DriveDrivesHideResponse };
