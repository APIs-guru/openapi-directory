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
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams.prototype, "agent", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams };
export var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum;
(function (DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum) {
    DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum["CoverageTypeUnspecified"] = "COVERAGE_TYPE_UNSPECIFIED";
    DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum["Intent"] = "INTENT";
    DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum["PageTransition"] = "PAGE_TRANSITION";
    DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum["TransitionRouteGroup"] = "TRANSITION_ROUTE_GROUP";
})(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum || (DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum = {}));
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams };
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 };
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 };
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity };
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest };
var DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse, _super);
    function DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3CalculateCoverageResponse)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse.prototype, "googleCloudDialogflowCxV3CalculateCoverageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse };
