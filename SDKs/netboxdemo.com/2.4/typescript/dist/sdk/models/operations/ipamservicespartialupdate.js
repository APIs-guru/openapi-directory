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
var IpamServicesPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(IpamServicesPartialUpdatePathParams, _super);
    function IpamServicesPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], IpamServicesPartialUpdatePathParams.prototype, "id", void 0);
    return IpamServicesPartialUpdatePathParams;
}(SpeakeasyBase));
export { IpamServicesPartialUpdatePathParams };
var IpamServicesPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(IpamServicesPartialUpdateRequest, _super);
    function IpamServicesPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamServicesPartialUpdatePathParams)
    ], IpamServicesPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritableServiceInput)
    ], IpamServicesPartialUpdateRequest.prototype, "request", void 0);
    return IpamServicesPartialUpdateRequest;
}(SpeakeasyBase));
export { IpamServicesPartialUpdateRequest };
var IpamServicesPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(IpamServicesPartialUpdateResponse, _super);
    function IpamServicesPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamServicesPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], IpamServicesPartialUpdateResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamServicesPartialUpdateResponse.prototype, "statusCode", void 0);
    return IpamServicesPartialUpdateResponse;
}(SpeakeasyBase));
export { IpamServicesPartialUpdateResponse };
