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
import { AccountDetails } from "./accountdetails";
import { AppIntegrity } from "./appintegrity";
import { DeviceIntegrity } from "./deviceintegrity";
import { RequestDetails } from "./requestdetails";
import { TestingDetails } from "./testingdetails";
// TokenPayloadExternal
/**
 * Contains basic app information and integrity signals like device attestation and licensing details.
**/
var TokenPayloadExternal = /** @class */ (function (_super) {
    __extends(TokenPayloadExternal, _super);
    function TokenPayloadExternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountDetails" }),
        __metadata("design:type", AccountDetails)
    ], TokenPayloadExternal.prototype, "accountDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=appIntegrity" }),
        __metadata("design:type", AppIntegrity)
    ], TokenPayloadExternal.prototype, "appIntegrity", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceIntegrity" }),
        __metadata("design:type", DeviceIntegrity)
    ], TokenPayloadExternal.prototype, "deviceIntegrity", void 0);
    __decorate([
        Metadata({ data: "json, name=requestDetails" }),
        __metadata("design:type", RequestDetails)
    ], TokenPayloadExternal.prototype, "requestDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=testingDetails" }),
        __metadata("design:type", TestingDetails)
    ], TokenPayloadExternal.prototype, "testingDetails", void 0);
    return TokenPayloadExternal;
}(SpeakeasyBase));
export { TokenPayloadExternal };
