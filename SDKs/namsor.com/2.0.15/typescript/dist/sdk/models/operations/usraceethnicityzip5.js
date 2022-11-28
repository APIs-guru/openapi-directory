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
var UsRaceEthnicityZip5PathParams = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityZip5PathParams, _super);
    function UsRaceEthnicityZip5PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" }),
        __metadata("design:type", String)
    ], UsRaceEthnicityZip5PathParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" }),
        __metadata("design:type", String)
    ], UsRaceEthnicityZip5PathParams.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zip5Code" }),
        __metadata("design:type", String)
    ], UsRaceEthnicityZip5PathParams.prototype, "zip5Code", void 0);
    return UsRaceEthnicityZip5PathParams;
}(SpeakeasyBase));
export { UsRaceEthnicityZip5PathParams };
var UsRaceEthnicityZip5Security = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityZip5Security, _super);
    function UsRaceEthnicityZip5Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UsRaceEthnicityZip5Security.prototype, "apiKey", void 0);
    return UsRaceEthnicityZip5Security;
}(SpeakeasyBase));
export { UsRaceEthnicityZip5Security };
var UsRaceEthnicityZip5Request = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityZip5Request, _super);
    function UsRaceEthnicityZip5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsRaceEthnicityZip5PathParams)
    ], UsRaceEthnicityZip5Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsRaceEthnicityZip5Security)
    ], UsRaceEthnicityZip5Request.prototype, "security", void 0);
    return UsRaceEthnicityZip5Request;
}(SpeakeasyBase));
export { UsRaceEthnicityZip5Request };
var UsRaceEthnicityZip5Response = /** @class */ (function (_super) {
    __extends(UsRaceEthnicityZip5Response, _super);
    function UsRaceEthnicityZip5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsRaceEthnicityZip5Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNameUsRaceEthnicityOut)
    ], UsRaceEthnicityZip5Response.prototype, "firstLastNameUsRaceEthnicityOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsRaceEthnicityZip5Response.prototype, "statusCode", void 0);
    return UsRaceEthnicityZip5Response;
}(SpeakeasyBase));
export { UsRaceEthnicityZip5Response };
