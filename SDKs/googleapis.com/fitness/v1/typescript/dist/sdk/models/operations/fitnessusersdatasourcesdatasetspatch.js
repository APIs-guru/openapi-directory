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
var FitnessUsersDataSourcesDatasetsPatchPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchPathParams, _super);
    function FitnessUsersDataSourcesDatasetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchPathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchPathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesDatasetsPatchPathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchPathParams };
var FitnessUsersDataSourcesDatasetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchQueryParams, _super);
    function FitnessUsersDataSourcesDatasetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesDatasetsPatchQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchQueryParams };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption1, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption1 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption2, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption2 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption3, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption3 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption4, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption4 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption5, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption5 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption6, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption6 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption7, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption7 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption8, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption8 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption9, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption9 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption10, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption10 };
var FitnessUsersDataSourcesDatasetsPatchSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurityOption11, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsPatchSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurityOption11 };
var FitnessUsersDataSourcesDatasetsPatchSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchSecurity, _super);
    function FitnessUsersDataSourcesDatasetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption1)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption2)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption3)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption4)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption5)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption6)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption7)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption8)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption9)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption10)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurityOption11)
    ], FitnessUsersDataSourcesDatasetsPatchSecurity.prototype, "option11", void 0);
    return FitnessUsersDataSourcesDatasetsPatchSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchSecurity };
var FitnessUsersDataSourcesDatasetsPatchRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchRequest, _super);
    function FitnessUsersDataSourcesDatasetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchPathParams)
    ], FitnessUsersDataSourcesDatasetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchQueryParams)
    ], FitnessUsersDataSourcesDatasetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dataset)
    ], FitnessUsersDataSourcesDatasetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsPatchSecurity)
    ], FitnessUsersDataSourcesDatasetsPatchRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesDatasetsPatchRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchRequest };
var FitnessUsersDataSourcesDatasetsPatchResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsPatchResponse, _super);
    function FitnessUsersDataSourcesDatasetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], FitnessUsersDataSourcesDatasetsPatchResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDatasetsPatchResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesDatasetsPatchResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsPatchResponse };
