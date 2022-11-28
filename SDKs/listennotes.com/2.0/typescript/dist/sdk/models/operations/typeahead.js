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
var TypeaheadQueryParams = /** @class */ (function (_super) {
    __extends(TypeaheadQueryParams, _super);
    function TypeaheadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], TypeaheadQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" }),
        __metadata("design:type", Number)
    ], TypeaheadQueryParams.prototype, "safeMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_genres" }),
        __metadata("design:type", Number)
    ], TypeaheadQueryParams.prototype, "showGenres", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_podcasts" }),
        __metadata("design:type", Number)
    ], TypeaheadQueryParams.prototype, "showPodcasts", void 0);
    return TypeaheadQueryParams;
}(SpeakeasyBase));
export { TypeaheadQueryParams };
var TypeaheadHeaders = /** @class */ (function (_super) {
    __extends(TypeaheadHeaders, _super);
    function TypeaheadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], TypeaheadHeaders.prototype, "xListenApiKey", void 0);
    return TypeaheadHeaders;
}(SpeakeasyBase));
export { TypeaheadHeaders };
var TypeaheadRequest = /** @class */ (function (_super) {
    __extends(TypeaheadRequest, _super);
    function TypeaheadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TypeaheadQueryParams)
    ], TypeaheadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TypeaheadHeaders)
    ], TypeaheadRequest.prototype, "headers", void 0);
    return TypeaheadRequest;
}(SpeakeasyBase));
export { TypeaheadRequest };
var TypeaheadResponse = /** @class */ (function (_super) {
    __extends(TypeaheadResponse, _super);
    function TypeaheadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TypeaheadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TypeaheadResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TypeaheadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TypeaheadResponse)
    ], TypeaheadResponse.prototype, "typeaheadResponse", void 0);
    return TypeaheadResponse;
}(SpeakeasyBase));
export { TypeaheadResponse };
