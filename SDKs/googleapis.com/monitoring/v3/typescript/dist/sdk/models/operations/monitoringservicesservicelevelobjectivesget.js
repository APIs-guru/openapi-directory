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
var MonitoringServicesServiceLevelObjectivesGetPathParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetPathParams, _super);
    function MonitoringServicesServiceLevelObjectivesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetPathParams.prototype, "name", void 0);
    return MonitoringServicesServiceLevelObjectivesGetPathParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetPathParams };
export var MonitoringServicesServiceLevelObjectivesGetViewEnum;
(function (MonitoringServicesServiceLevelObjectivesGetViewEnum) {
    MonitoringServicesServiceLevelObjectivesGetViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    MonitoringServicesServiceLevelObjectivesGetViewEnum["Full"] = "FULL";
    MonitoringServicesServiceLevelObjectivesGetViewEnum["Explicit"] = "EXPLICIT";
})(MonitoringServicesServiceLevelObjectivesGetViewEnum || (MonitoringServicesServiceLevelObjectivesGetViewEnum = {}));
var MonitoringServicesServiceLevelObjectivesGetQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetQueryParams, _super);
    function MonitoringServicesServiceLevelObjectivesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetQueryParams.prototype, "view", void 0);
    return MonitoringServicesServiceLevelObjectivesGetQueryParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetQueryParams };
var MonitoringServicesServiceLevelObjectivesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetSecurityOption1, _super);
    function MonitoringServicesServiceLevelObjectivesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesGetSecurityOption1;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetSecurityOption1 };
var MonitoringServicesServiceLevelObjectivesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetSecurityOption2, _super);
    function MonitoringServicesServiceLevelObjectivesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesGetSecurityOption2;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetSecurityOption2 };
var MonitoringServicesServiceLevelObjectivesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetSecurityOption3, _super);
    function MonitoringServicesServiceLevelObjectivesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesGetSecurityOption3;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetSecurityOption3 };
var MonitoringServicesServiceLevelObjectivesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetSecurityOption4, _super);
    function MonitoringServicesServiceLevelObjectivesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesGetSecurityOption4.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesGetSecurityOption4;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetSecurityOption4 };
var MonitoringServicesServiceLevelObjectivesGetSecurity = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetSecurity, _super);
    function MonitoringServicesServiceLevelObjectivesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetSecurityOption1)
    ], MonitoringServicesServiceLevelObjectivesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetSecurityOption2)
    ], MonitoringServicesServiceLevelObjectivesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetSecurityOption3)
    ], MonitoringServicesServiceLevelObjectivesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetSecurityOption4)
    ], MonitoringServicesServiceLevelObjectivesGetSecurity.prototype, "option4", void 0);
    return MonitoringServicesServiceLevelObjectivesGetSecurity;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetSecurity };
var MonitoringServicesServiceLevelObjectivesGetRequest = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetRequest, _super);
    function MonitoringServicesServiceLevelObjectivesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetPathParams)
    ], MonitoringServicesServiceLevelObjectivesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetQueryParams)
    ], MonitoringServicesServiceLevelObjectivesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesGetSecurity)
    ], MonitoringServicesServiceLevelObjectivesGetRequest.prototype, "security", void 0);
    return MonitoringServicesServiceLevelObjectivesGetRequest;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetRequest };
var MonitoringServicesServiceLevelObjectivesGetResponse = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesGetResponse, _super);
    function MonitoringServicesServiceLevelObjectivesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceLevelObjective)
    ], MonitoringServicesServiceLevelObjectivesGetResponse.prototype, "serviceLevelObjective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesGetResponse.prototype, "statusCode", void 0);
    return MonitoringServicesServiceLevelObjectivesGetResponse;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesGetResponse };
