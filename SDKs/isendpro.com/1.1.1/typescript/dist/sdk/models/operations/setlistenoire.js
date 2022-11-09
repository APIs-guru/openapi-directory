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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var SetListeNoireSetlisteNoireEnum;
(function (SetListeNoireSetlisteNoireEnum) {
    SetListeNoireSetlisteNoireEnum["One"] = "1";
})(SetListeNoireSetlisteNoireEnum || (SetListeNoireSetlisteNoireEnum = {}));
var SetListeNoireQueryParams = /** @class */ (function (_super) {
    __extends(SetListeNoireQueryParams, _super);
    function SetListeNoireQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keyid" }),
        __metadata("design:type", String)
    ], SetListeNoireQueryParams.prototype, "keyid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=num" }),
        __metadata("design:type", String)
    ], SetListeNoireQueryParams.prototype, "num", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setlisteNoire" }),
        __metadata("design:type", String)
    ], SetListeNoireQueryParams.prototype, "setlisteNoire", void 0);
    return SetListeNoireQueryParams;
}(SpeakeasyBase));
export { SetListeNoireQueryParams };
var SetListeNoireRequest = /** @class */ (function (_super) {
    __extends(SetListeNoireRequest, _super);
    function SetListeNoireRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SetListeNoireQueryParams)
    ], SetListeNoireRequest.prototype, "queryParams", void 0);
    return SetListeNoireRequest;
}(SpeakeasyBase));
export { SetListeNoireRequest };
var SetListeNoireResponse = /** @class */ (function (_super) {
    __extends(SetListeNoireResponse, _super);
    function SetListeNoireResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SetListeNoireResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Erreur)
    ], SetListeNoireResponse.prototype, "erreur", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListenoireReponse)
    ], SetListeNoireResponse.prototype, "listenoireReponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SetListeNoireResponse.prototype, "statusCode", void 0);
    return SetListeNoireResponse;
}(SpeakeasyBase));
export { SetListeNoireResponse };
