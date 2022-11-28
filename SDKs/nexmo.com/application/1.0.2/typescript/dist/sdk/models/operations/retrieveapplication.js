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
var RetrieveApplicationPathParams = /** @class */ (function (_super) {
    __extends(RetrieveApplicationPathParams, _super);
    function RetrieveApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], RetrieveApplicationPathParams.prototype, "appId", void 0);
    return RetrieveApplicationPathParams;
}(SpeakeasyBase));
export { RetrieveApplicationPathParams };
var RetrieveApplicationQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveApplicationQueryParams, _super);
    function RetrieveApplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveApplicationQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" }),
        __metadata("design:type", String)
    ], RetrieveApplicationQueryParams.prototype, "apiSecret", void 0);
    return RetrieveApplicationQueryParams;
}(SpeakeasyBase));
export { RetrieveApplicationQueryParams };
var RetrieveApplicationRequest = /** @class */ (function (_super) {
    __extends(RetrieveApplicationRequest, _super);
    function RetrieveApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveApplicationPathParams)
    ], RetrieveApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveApplicationQueryParams)
    ], RetrieveApplicationRequest.prototype, "queryParams", void 0);
    return RetrieveApplicationRequest;
}(SpeakeasyBase));
export { RetrieveApplicationRequest };
var RetrieveApplicationResponse = /** @class */ (function (_super) {
    __extends(RetrieveApplicationResponse, _super);
    function RetrieveApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Application)
    ], RetrieveApplicationResponse.prototype, "application", void 0);
    return RetrieveApplicationResponse;
}(SpeakeasyBase));
export { RetrieveApplicationResponse };
