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
var FitnessUsersDatasetAggregatePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregatePathParams, _super);
    function FitnessUsersDatasetAggregatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregatePathParams.prototype, "userId", void 0);
    return FitnessUsersDatasetAggregatePathParams;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregatePathParams };
var FitnessUsersDatasetAggregateQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateQueryParams, _super);
    function FitnessUsersDatasetAggregateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDatasetAggregateQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateQueryParams };
var FitnessUsersDatasetAggregateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption1, _super);
    function FitnessUsersDatasetAggregateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption1 };
var FitnessUsersDatasetAggregateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption2, _super);
    function FitnessUsersDatasetAggregateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption2 };
var FitnessUsersDatasetAggregateSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption3, _super);
    function FitnessUsersDatasetAggregateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption3 };
var FitnessUsersDatasetAggregateSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption4, _super);
    function FitnessUsersDatasetAggregateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption4 };
var FitnessUsersDatasetAggregateSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption5, _super);
    function FitnessUsersDatasetAggregateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption5 };
var FitnessUsersDatasetAggregateSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption6, _super);
    function FitnessUsersDatasetAggregateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption6 };
var FitnessUsersDatasetAggregateSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption7, _super);
    function FitnessUsersDatasetAggregateSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption7 };
var FitnessUsersDatasetAggregateSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption8, _super);
    function FitnessUsersDatasetAggregateSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption8 };
var FitnessUsersDatasetAggregateSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption9, _super);
    function FitnessUsersDatasetAggregateSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption9 };
var FitnessUsersDatasetAggregateSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption10, _super);
    function FitnessUsersDatasetAggregateSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption10 };
var FitnessUsersDatasetAggregateSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption11, _super);
    function FitnessUsersDatasetAggregateSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption11 };
var FitnessUsersDatasetAggregateSecurityOption12 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption12, _super);
    function FitnessUsersDatasetAggregateSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption12.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption12;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption12 };
var FitnessUsersDatasetAggregateSecurityOption13 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption13, _super);
    function FitnessUsersDatasetAggregateSecurityOption13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption13.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption13.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption13;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption13 };
var FitnessUsersDatasetAggregateSecurityOption14 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption14, _super);
    function FitnessUsersDatasetAggregateSecurityOption14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption14.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption14.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption14;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption14 };
var FitnessUsersDatasetAggregateSecurityOption15 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption15, _super);
    function FitnessUsersDatasetAggregateSecurityOption15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption15.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption15.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption15;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption15 };
var FitnessUsersDatasetAggregateSecurityOption16 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption16, _super);
    function FitnessUsersDatasetAggregateSecurityOption16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption16.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption16.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption16;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption16 };
var FitnessUsersDatasetAggregateSecurityOption17 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption17, _super);
    function FitnessUsersDatasetAggregateSecurityOption17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption17.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption17.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption17;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption17 };
var FitnessUsersDatasetAggregateSecurityOption18 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption18, _super);
    function FitnessUsersDatasetAggregateSecurityOption18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption18.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption18.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption18;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption18 };
var FitnessUsersDatasetAggregateSecurityOption19 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption19, _super);
    function FitnessUsersDatasetAggregateSecurityOption19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption19.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption19.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption19;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption19 };
var FitnessUsersDatasetAggregateSecurityOption20 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption20, _super);
    function FitnessUsersDatasetAggregateSecurityOption20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption20.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption20.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption20;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption20 };
var FitnessUsersDatasetAggregateSecurityOption21 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption21, _super);
    function FitnessUsersDatasetAggregateSecurityOption21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption21.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption21.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption21;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption21 };
var FitnessUsersDatasetAggregateSecurityOption22 = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurityOption22, _super);
    function FitnessUsersDatasetAggregateSecurityOption22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDatasetAggregateSecurityOption22.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDatasetAggregateSecurityOption22.prototype, "oauth2c", void 0);
    return FitnessUsersDatasetAggregateSecurityOption22;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurityOption22 };
var FitnessUsersDatasetAggregateSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateSecurity, _super);
    function FitnessUsersDatasetAggregateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption1)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption2)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption3)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption4)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption5)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption6)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption7)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption8)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption9)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption10)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption11)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption12)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option12", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption13)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption14)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option14", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption15)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option15", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption16)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption17)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option17", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption18)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option18", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption19)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option19", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption20)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option20", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption21)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option21", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurityOption22)
    ], FitnessUsersDatasetAggregateSecurity.prototype, "option22", void 0);
    return FitnessUsersDatasetAggregateSecurity;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateSecurity };
var FitnessUsersDatasetAggregateRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateRequest, _super);
    function FitnessUsersDatasetAggregateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDatasetAggregatePathParams)
    ], FitnessUsersDatasetAggregateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDatasetAggregateQueryParams)
    ], FitnessUsersDatasetAggregateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AggregateRequest)
    ], FitnessUsersDatasetAggregateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDatasetAggregateSecurity)
    ], FitnessUsersDatasetAggregateRequest.prototype, "security", void 0);
    return FitnessUsersDatasetAggregateRequest;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateRequest };
var FitnessUsersDatasetAggregateResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDatasetAggregateResponse, _super);
    function FitnessUsersDatasetAggregateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AggregateResponse)
    ], FitnessUsersDatasetAggregateResponse.prototype, "aggregateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDatasetAggregateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDatasetAggregateResponse.prototype, "statusCode", void 0);
    return FitnessUsersDatasetAggregateResponse;
}(SpeakeasyBase));
export { FitnessUsersDatasetAggregateResponse };
