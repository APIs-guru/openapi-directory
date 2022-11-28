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
var LandlordControllerGetLandlordCrmEntriesPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetLandlordCrmEntriesPathParams, _super);
    function LandlordControllerGetLandlordCrmEntriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetLandlordCrmEntriesPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetLandlordCrmEntriesPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetLandlordCrmEntriesPathParams };
var LandlordControllerGetLandlordCrmEntriesQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetLandlordCrmEntriesQueryParams, _super);
    function LandlordControllerGetLandlordCrmEntriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetLandlordCrmEntriesQueryParams.prototype, "token", void 0);
    return LandlordControllerGetLandlordCrmEntriesQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetLandlordCrmEntriesQueryParams };
var LandlordControllerGetLandlordCrmEntriesRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetLandlordCrmEntriesRequest, _super);
    function LandlordControllerGetLandlordCrmEntriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetLandlordCrmEntriesPathParams)
    ], LandlordControllerGetLandlordCrmEntriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetLandlordCrmEntriesQueryParams)
    ], LandlordControllerGetLandlordCrmEntriesRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetLandlordCrmEntriesRequest;
}(SpeakeasyBase));
export { LandlordControllerGetLandlordCrmEntriesRequest };
var LandlordControllerGetLandlordCrmEntriesResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetLandlordCrmEntriesResponse, _super);
    function LandlordControllerGetLandlordCrmEntriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], LandlordControllerGetLandlordCrmEntriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetLandlordCrmEntriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.LandlordCrmEntry }),
        __metadata("design:type", Array)
    ], LandlordControllerGetLandlordCrmEntriesResponse.prototype, "landlordCrmEntries", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetLandlordCrmEntriesResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetLandlordCrmEntriesResponse;
}(SpeakeasyBase));
export { LandlordControllerGetLandlordCrmEntriesResponse };
