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
import { CheckInfo } from "./checkinfo";
import { QuotaInfo } from "./quotainfo";
// CheckResponse
/**
 * Response message for the Check method.
**/
var CheckResponse = /** @class */ (function (_super) {
    __extends(CheckResponse, _super);
    function CheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=checkErrors", elemType: shared.CheckError }),
        __metadata("design:type", Array)
    ], CheckResponse.prototype, "checkErrors", void 0);
    __decorate([
        Metadata({ data: "json, name=checkInfo" }),
        __metadata("design:type", CheckInfo)
    ], CheckResponse.prototype, "checkInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], CheckResponse.prototype, "operationId", void 0);
    __decorate([
        Metadata({ data: "json, name=quotaInfo" }),
        __metadata("design:type", QuotaInfo)
    ], CheckResponse.prototype, "quotaInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceConfigId" }),
        __metadata("design:type", String)
    ], CheckResponse.prototype, "serviceConfigId", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceRolloutId" }),
        __metadata("design:type", String)
    ], CheckResponse.prototype, "serviceRolloutId", void 0);
    return CheckResponse;
}(SpeakeasyBase));
export { CheckResponse };
