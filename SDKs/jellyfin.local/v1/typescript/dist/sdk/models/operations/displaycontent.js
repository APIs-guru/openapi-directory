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
var DisplayContentPathParams = /** @class */ (function (_super) {
    __extends(DisplayContentPathParams, _super);
    function DisplayContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], DisplayContentPathParams.prototype, "sessionId", void 0);
    return DisplayContentPathParams;
}(SpeakeasyBase));
export { DisplayContentPathParams };
var DisplayContentQueryParams = /** @class */ (function (_super) {
    __extends(DisplayContentQueryParams, _super);
    function DisplayContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" }),
        __metadata("design:type", String)
    ], DisplayContentQueryParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemName" }),
        __metadata("design:type", String)
    ], DisplayContentQueryParams.prototype, "itemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemType" }),
        __metadata("design:type", String)
    ], DisplayContentQueryParams.prototype, "itemType", void 0);
    return DisplayContentQueryParams;
}(SpeakeasyBase));
export { DisplayContentQueryParams };
var DisplayContentSecurity = /** @class */ (function (_super) {
    __extends(DisplayContentSecurity, _super);
    function DisplayContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DisplayContentSecurity.prototype, "customAuthentication", void 0);
    return DisplayContentSecurity;
}(SpeakeasyBase));
export { DisplayContentSecurity };
var DisplayContentRequest = /** @class */ (function (_super) {
    __extends(DisplayContentRequest, _super);
    function DisplayContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayContentPathParams)
    ], DisplayContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayContentQueryParams)
    ], DisplayContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayContentSecurity)
    ], DisplayContentRequest.prototype, "security", void 0);
    return DisplayContentRequest;
}(SpeakeasyBase));
export { DisplayContentRequest };
var DisplayContentResponse = /** @class */ (function (_super) {
    __extends(DisplayContentResponse, _super);
    function DisplayContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayContentResponse.prototype, "statusCode", void 0);
    return DisplayContentResponse;
}(SpeakeasyBase));
export { DisplayContentResponse };
