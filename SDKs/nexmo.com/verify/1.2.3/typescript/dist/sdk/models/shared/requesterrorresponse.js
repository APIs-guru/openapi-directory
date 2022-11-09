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
export var RequestErrorResponseStatusEnum;
(function (RequestErrorResponseStatusEnum) {
    RequestErrorResponseStatusEnum["Zero"] = "0";
    RequestErrorResponseStatusEnum["One"] = "1";
    RequestErrorResponseStatusEnum["Two"] = "2";
    RequestErrorResponseStatusEnum["Three"] = "3";
    RequestErrorResponseStatusEnum["Four"] = "4";
    RequestErrorResponseStatusEnum["Five"] = "5";
    RequestErrorResponseStatusEnum["Six"] = "6";
    RequestErrorResponseStatusEnum["Seven"] = "7";
    RequestErrorResponseStatusEnum["Eight"] = "8";
    RequestErrorResponseStatusEnum["Nine"] = "9";
    RequestErrorResponseStatusEnum["Ten"] = "10";
    RequestErrorResponseStatusEnum["Fifteen"] = "15";
    RequestErrorResponseStatusEnum["Twenty"] = "20";
    RequestErrorResponseStatusEnum["TwentyNine"] = "29";
})(RequestErrorResponseStatusEnum || (RequestErrorResponseStatusEnum = {}));
// RequestErrorResponse
/**
 * Error
**/
var RequestErrorResponse = /** @class */ (function (_super) {
    __extends(RequestErrorResponse, _super);
    function RequestErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error_text" }),
        __metadata("design:type", String)
    ], RequestErrorResponse.prototype, "errorText", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], RequestErrorResponse.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], RequestErrorResponse.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RequestErrorResponse.prototype, "status", void 0);
    return RequestErrorResponse;
}(SpeakeasyBase));
export { RequestErrorResponse };
