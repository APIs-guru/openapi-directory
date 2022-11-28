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
var MonitoringServicesServiceLevelObjectivesCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreatePathParams, _super);
    function MonitoringServicesServiceLevelObjectivesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreatePathParams.prototype, "parent", void 0);
    return MonitoringServicesServiceLevelObjectivesCreatePathParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreatePathParams };
var MonitoringServicesServiceLevelObjectivesCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateQueryParams, _super);
    function MonitoringServicesServiceLevelObjectivesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceLevelObjectiveId" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "serviceLevelObjectiveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateQueryParams };
var MonitoringServicesServiceLevelObjectivesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateSecurityOption1, _super);
    function MonitoringServicesServiceLevelObjectivesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateSecurityOption1 };
var MonitoringServicesServiceLevelObjectivesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateSecurityOption2, _super);
    function MonitoringServicesServiceLevelObjectivesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateSecurityOption2 };
var MonitoringServicesServiceLevelObjectivesCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateSecurity, _super);
    function MonitoringServicesServiceLevelObjectivesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesCreateSecurityOption1)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesCreateSecurityOption2)
    ], MonitoringServicesServiceLevelObjectivesCreateSecurity.prototype, "option2", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateSecurity;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateSecurity };
var MonitoringServicesServiceLevelObjectivesCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateRequest, _super);
    function MonitoringServicesServiceLevelObjectivesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesCreatePathParams)
    ], MonitoringServicesServiceLevelObjectivesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesCreateQueryParams)
    ], MonitoringServicesServiceLevelObjectivesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceLevelObjective)
    ], MonitoringServicesServiceLevelObjectivesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesCreateSecurity)
    ], MonitoringServicesServiceLevelObjectivesCreateRequest.prototype, "security", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateRequest;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateRequest };
var MonitoringServicesServiceLevelObjectivesCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesCreateResponse, _super);
    function MonitoringServicesServiceLevelObjectivesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceLevelObjective)
    ], MonitoringServicesServiceLevelObjectivesCreateResponse.prototype, "serviceLevelObjective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesCreateResponse.prototype, "statusCode", void 0);
    return MonitoringServicesServiceLevelObjectivesCreateResponse;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesCreateResponse };
