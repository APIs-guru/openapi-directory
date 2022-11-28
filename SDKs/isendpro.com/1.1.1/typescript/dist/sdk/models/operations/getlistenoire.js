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
export var GetListeNoireGetListeNoireEnum;
(function (GetListeNoireGetListeNoireEnum) {
    GetListeNoireGetListeNoireEnum["One"] = "1";
})(GetListeNoireGetListeNoireEnum || (GetListeNoireGetListeNoireEnum = {}));
var GetListeNoireQueryParams = /** @class */ (function (_super) {
    __extends(GetListeNoireQueryParams, _super);
    function GetListeNoireQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getListeNoire" }),
        __metadata("design:type", String)
    ], GetListeNoireQueryParams.prototype, "getListeNoire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" }),
        __metadata("design:type", String)
    ], GetListeNoireQueryParams.prototype, "keyid", void 0);
    return GetListeNoireQueryParams;
}(SpeakeasyBase));
export { GetListeNoireQueryParams };
var GetListeNoireRequest = /** @class */ (function (_super) {
    __extends(GetListeNoireRequest, _super);
    function GetListeNoireRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListeNoireQueryParams)
    ], GetListeNoireRequest.prototype, "queryParams", void 0);
    return GetListeNoireRequest;
}(SpeakeasyBase));
export { GetListeNoireRequest };
var GetListeNoireResponse = /** @class */ (function (_super) {
    __extends(GetListeNoireResponse, _super);
    function GetListeNoireResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListeNoireResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Erreur)
    ], GetListeNoireResponse.prototype, "erreur", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListeNoireResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListeNoireResponse.prototype, "getListeNoire200ApplicationJsonBinaryString", void 0);
    return GetListeNoireResponse;
}(SpeakeasyBase));
export { GetListeNoireResponse };
