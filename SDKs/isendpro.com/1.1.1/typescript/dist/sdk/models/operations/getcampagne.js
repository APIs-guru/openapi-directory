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
export var GetCampagneRapportCampagneEnum;
(function (GetCampagneRapportCampagneEnum) {
    GetCampagneRapportCampagneEnum["One"] = "1";
})(GetCampagneRapportCampagneEnum || (GetCampagneRapportCampagneEnum = {}));
var GetCampagneQueryParams = /** @class */ (function (_super) {
    __extends(GetCampagneQueryParams, _super);
    function GetCampagneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_deb" }),
        __metadata("design:type", String)
    ], GetCampagneQueryParams.prototype, "dateDeb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_fin" }),
        __metadata("design:type", String)
    ], GetCampagneQueryParams.prototype, "dateFin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" }),
        __metadata("design:type", String)
    ], GetCampagneQueryParams.prototype, "keyid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rapportCampagne" }),
        __metadata("design:type", String)
    ], GetCampagneQueryParams.prototype, "rapportCampagne", void 0);
    return GetCampagneQueryParams;
}(SpeakeasyBase));
export { GetCampagneQueryParams };
var GetCampagneRequest = /** @class */ (function (_super) {
    __extends(GetCampagneRequest, _super);
    function GetCampagneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCampagneQueryParams)
    ], GetCampagneRequest.prototype, "queryParams", void 0);
    return GetCampagneRequest;
}(SpeakeasyBase));
export { GetCampagneRequest };
var GetCampagneResponse = /** @class */ (function (_super) {
    __extends(GetCampagneResponse, _super);
    function GetCampagneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCampagneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCampagneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Erreur)
    ], GetCampagneResponse.prototype, "erreur", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCampagneResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCampagneResponse.prototype, "getCampagne200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCampagneResponse.prototype, "getCampagne200FileBinaryString", void 0);
    return GetCampagneResponse;
}(SpeakeasyBase));
export { GetCampagneResponse };
