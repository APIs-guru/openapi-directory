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
var MonitoringServicesServiceLevelObjectivesListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListPathParams, _super);
    function MonitoringServicesServiceLevelObjectivesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListPathParams.prototype, "parent", void 0);
    return MonitoringServicesServiceLevelObjectivesListPathParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListPathParams };
export var MonitoringServicesServiceLevelObjectivesListViewEnum;
(function (MonitoringServicesServiceLevelObjectivesListViewEnum) {
    MonitoringServicesServiceLevelObjectivesListViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    MonitoringServicesServiceLevelObjectivesListViewEnum["Full"] = "FULL";
    MonitoringServicesServiceLevelObjectivesListViewEnum["Explicit"] = "EXPLICIT";
})(MonitoringServicesServiceLevelObjectivesListViewEnum || (MonitoringServicesServiceLevelObjectivesListViewEnum = {}));
var MonitoringServicesServiceLevelObjectivesListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListQueryParams, _super);
    function MonitoringServicesServiceLevelObjectivesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListQueryParams.prototype, "view", void 0);
    return MonitoringServicesServiceLevelObjectivesListQueryParams;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListQueryParams };
var MonitoringServicesServiceLevelObjectivesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListSecurityOption1, _super);
    function MonitoringServicesServiceLevelObjectivesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListSecurityOption1 };
var MonitoringServicesServiceLevelObjectivesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListSecurityOption2, _super);
    function MonitoringServicesServiceLevelObjectivesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListSecurityOption2 };
var MonitoringServicesServiceLevelObjectivesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListSecurityOption3, _super);
    function MonitoringServicesServiceLevelObjectivesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringServicesServiceLevelObjectivesListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringServicesServiceLevelObjectivesListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListSecurityOption3 };
var MonitoringServicesServiceLevelObjectivesListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListSecurity, _super);
    function MonitoringServicesServiceLevelObjectivesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListSecurityOption1)
    ], MonitoringServicesServiceLevelObjectivesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListSecurityOption2)
    ], MonitoringServicesServiceLevelObjectivesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListSecurityOption3)
    ], MonitoringServicesServiceLevelObjectivesListSecurity.prototype, "option3", void 0);
    return MonitoringServicesServiceLevelObjectivesListSecurity;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListSecurity };
var MonitoringServicesServiceLevelObjectivesListRequest = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListRequest, _super);
    function MonitoringServicesServiceLevelObjectivesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListPathParams)
    ], MonitoringServicesServiceLevelObjectivesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListQueryParams)
    ], MonitoringServicesServiceLevelObjectivesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringServicesServiceLevelObjectivesListSecurity)
    ], MonitoringServicesServiceLevelObjectivesListRequest.prototype, "security", void 0);
    return MonitoringServicesServiceLevelObjectivesListRequest;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListRequest };
var MonitoringServicesServiceLevelObjectivesListResponse = /** @class */ (function (_super) {
    __extends(MonitoringServicesServiceLevelObjectivesListResponse, _super);
    function MonitoringServicesServiceLevelObjectivesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringServicesServiceLevelObjectivesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListServiceLevelObjectivesResponse)
    ], MonitoringServicesServiceLevelObjectivesListResponse.prototype, "listServiceLevelObjectivesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringServicesServiceLevelObjectivesListResponse.prototype, "statusCode", void 0);
    return MonitoringServicesServiceLevelObjectivesListResponse;
}(SpeakeasyBase));
export { MonitoringServicesServiceLevelObjectivesListResponse };
