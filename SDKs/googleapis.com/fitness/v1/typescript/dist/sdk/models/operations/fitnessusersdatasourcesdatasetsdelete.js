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
var FitnessUsersDataSourcesDatasetsDeletePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeletePathParams, _super);
    function FitnessUsersDataSourcesDatasetsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeletePathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeletePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeletePathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesDatasetsDeletePathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeletePathParams };
var FitnessUsersDataSourcesDatasetsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteQueryParams, _super);
    function FitnessUsersDataSourcesDatasetsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteQueryParams };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption1, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption1 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption2, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption2 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption3, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption3 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption4, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption4 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption5, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption5 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption6, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption6 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption7, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption7 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption8, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption8 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption9, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption9 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption10, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption10 };
var FitnessUsersDataSourcesDatasetsDeleteSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurityOption11, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurityOption11 };
var FitnessUsersDataSourcesDatasetsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteSecurity, _super);
    function FitnessUsersDataSourcesDatasetsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption1)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption2)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption3)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption4)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption5)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption6)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption7)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption8)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption9)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption10)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurityOption11)
    ], FitnessUsersDataSourcesDatasetsDeleteSecurity.prototype, "option11", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteSecurity };
var FitnessUsersDataSourcesDatasetsDeleteRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteRequest, _super);
    function FitnessUsersDataSourcesDatasetsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeletePathParams)
    ], FitnessUsersDataSourcesDatasetsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteQueryParams)
    ], FitnessUsersDataSourcesDatasetsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesDatasetsDeleteSecurity)
    ], FitnessUsersDataSourcesDatasetsDeleteRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteRequest };
var FitnessUsersDataSourcesDatasetsDeleteResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesDatasetsDeleteResponse, _super);
    function FitnessUsersDataSourcesDatasetsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesDatasetsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesDatasetsDeleteResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesDatasetsDeleteResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesDatasetsDeleteResponse };
