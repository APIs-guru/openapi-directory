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
var PlayPathParams = /** @class */ (function (_super) {
    __extends(PlayPathParams, _super);
    function PlayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], PlayPathParams.prototype, "sessionId", void 0);
    return PlayPathParams;
}(SpeakeasyBase));
export { PlayPathParams };
var PlayQueryParams = /** @class */ (function (_super) {
    __extends(PlayQueryParams, _super);
    function PlayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemIds" }),
        __metadata("design:type", Array)
    ], PlayQueryParams.prototype, "itemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playCommand" }),
        __metadata("design:type", String)
    ], PlayQueryParams.prototype, "playCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" }),
        __metadata("design:type", Number)
    ], PlayQueryParams.prototype, "startPositionTicks", void 0);
    return PlayQueryParams;
}(SpeakeasyBase));
export { PlayQueryParams };
var PlaySecurity = /** @class */ (function (_super) {
    __extends(PlaySecurity, _super);
    function PlaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], PlaySecurity.prototype, "customAuthentication", void 0);
    return PlaySecurity;
}(SpeakeasyBase));
export { PlaySecurity };
var PlayRequest = /** @class */ (function (_super) {
    __extends(PlayRequest, _super);
    function PlayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayPathParams)
    ], PlayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayQueryParams)
    ], PlayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaySecurity)
    ], PlayRequest.prototype, "security", void 0);
    return PlayRequest;
}(SpeakeasyBase));
export { PlayRequest };
var PlayResponse = /** @class */ (function (_super) {
    __extends(PlayResponse, _super);
    function PlayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlayResponse.prototype, "statusCode", void 0);
    return PlayResponse;
}(SpeakeasyBase));
export { PlayResponse };
