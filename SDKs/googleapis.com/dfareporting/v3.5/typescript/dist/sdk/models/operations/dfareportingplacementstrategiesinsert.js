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
var DfareportingPlacementStrategiesInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesInsertPathParams, _super);
    function DfareportingPlacementStrategiesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertPathParams.prototype, "profileId", void 0);
    return DfareportingPlacementStrategiesInsertPathParams;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesInsertPathParams };
var DfareportingPlacementStrategiesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesInsertQueryParams, _super);
    function DfareportingPlacementStrategiesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingPlacementStrategiesInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesInsertQueryParams };
var DfareportingPlacementStrategiesInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesInsertSecurity, _super);
    function DfareportingPlacementStrategiesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingPlacementStrategiesInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingPlacementStrategiesInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingPlacementStrategiesInsertSecurity;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesInsertSecurity };
var DfareportingPlacementStrategiesInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesInsertRequest, _super);
    function DfareportingPlacementStrategiesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesInsertPathParams)
    ], DfareportingPlacementStrategiesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesInsertQueryParams)
    ], DfareportingPlacementStrategiesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlacementStrategy)
    ], DfareportingPlacementStrategiesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingPlacementStrategiesInsertSecurity)
    ], DfareportingPlacementStrategiesInsertRequest.prototype, "security", void 0);
    return DfareportingPlacementStrategiesInsertRequest;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesInsertRequest };
var DfareportingPlacementStrategiesInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingPlacementStrategiesInsertResponse, _super);
    function DfareportingPlacementStrategiesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingPlacementStrategiesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlacementStrategy)
    ], DfareportingPlacementStrategiesInsertResponse.prototype, "placementStrategy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingPlacementStrategiesInsertResponse.prototype, "statusCode", void 0);
    return DfareportingPlacementStrategiesInsertResponse;
}(SpeakeasyBase));
export { DfareportingPlacementStrategiesInsertResponse };
