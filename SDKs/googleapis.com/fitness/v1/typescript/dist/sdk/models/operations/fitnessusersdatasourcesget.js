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
var FitnessUsersDataSourcesGetPathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetPathParams, _super);
    function FitnessUsersDataSourcesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataSourceId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetPathParams.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetPathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesGetPathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetPathParams };
var FitnessUsersDataSourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetQueryParams, _super);
    function FitnessUsersDataSourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesGetQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetQueryParams };
var FitnessUsersDataSourcesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption1, _super);
    function FitnessUsersDataSourcesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption1 };
var FitnessUsersDataSourcesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption2, _super);
    function FitnessUsersDataSourcesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption2 };
var FitnessUsersDataSourcesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption3, _super);
    function FitnessUsersDataSourcesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption3 };
var FitnessUsersDataSourcesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption4, _super);
    function FitnessUsersDataSourcesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption4 };
var FitnessUsersDataSourcesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption5, _super);
    function FitnessUsersDataSourcesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption5 };
var FitnessUsersDataSourcesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption6, _super);
    function FitnessUsersDataSourcesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption6 };
var FitnessUsersDataSourcesGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption7, _super);
    function FitnessUsersDataSourcesGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption7 };
var FitnessUsersDataSourcesGetSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption8, _super);
    function FitnessUsersDataSourcesGetSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption8 };
var FitnessUsersDataSourcesGetSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption9, _super);
    function FitnessUsersDataSourcesGetSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption9 };
var FitnessUsersDataSourcesGetSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption10, _super);
    function FitnessUsersDataSourcesGetSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption10 };
var FitnessUsersDataSourcesGetSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption11, _super);
    function FitnessUsersDataSourcesGetSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption11 };
var FitnessUsersDataSourcesGetSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption12, _super);
    function FitnessUsersDataSourcesGetSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption12;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption12 };
var FitnessUsersDataSourcesGetSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption13, _super);
    function FitnessUsersDataSourcesGetSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption13;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption13 };
var FitnessUsersDataSourcesGetSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption14, _super);
    function FitnessUsersDataSourcesGetSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption14;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption14 };
var FitnessUsersDataSourcesGetSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption15, _super);
    function FitnessUsersDataSourcesGetSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption15;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption15 };
var FitnessUsersDataSourcesGetSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption16, _super);
    function FitnessUsersDataSourcesGetSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption16;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption16 };
var FitnessUsersDataSourcesGetSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption17, _super);
    function FitnessUsersDataSourcesGetSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption17;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption17 };
var FitnessUsersDataSourcesGetSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption18, _super);
    function FitnessUsersDataSourcesGetSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption18;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption18 };
var FitnessUsersDataSourcesGetSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption19, _super);
    function FitnessUsersDataSourcesGetSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption19;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption19 };
var FitnessUsersDataSourcesGetSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption20, _super);
    function FitnessUsersDataSourcesGetSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption20;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption20 };
var FitnessUsersDataSourcesGetSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption21, _super);
    function FitnessUsersDataSourcesGetSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption21;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption21 };
var FitnessUsersDataSourcesGetSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurityOption22, _super);
    function FitnessUsersDataSourcesGetSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesGetSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesGetSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesGetSecurityOption22;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurityOption22 };
var FitnessUsersDataSourcesGetSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetSecurity, _super);
    function FitnessUsersDataSourcesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption1)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption2)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption3)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption4)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption5)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption6)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption7)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption8)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption9)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption10)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption11)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption12)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption13)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption14)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option14", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption15)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option15", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption16)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption17)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option17", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption18)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option18", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption19)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option19", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption20)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption21)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option21", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurityOption22)
    ], FitnessUsersDataSourcesGetSecurity.prototype, "option22", void 0);
    return FitnessUsersDataSourcesGetSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetSecurity };
var FitnessUsersDataSourcesGetRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetRequest, _super);
    function FitnessUsersDataSourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesGetPathParams)
    ], FitnessUsersDataSourcesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesGetQueryParams)
    ], FitnessUsersDataSourcesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesGetSecurity)
    ], FitnessUsersDataSourcesGetRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesGetRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetRequest };
var FitnessUsersDataSourcesGetResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesGetResponse, _super);
    function FitnessUsersDataSourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesGetResponse.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesGetResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesGetResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesGetResponse };
