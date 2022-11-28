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
import { X509Extension } from "./x509extension";
import { CaOptions } from "./caoptions";
import { KeyUsage } from "./keyusage";
import { ObjectId } from "./objectid";
// X509Parameters
/**
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
var X509Parameters = /** @class */ (function (_super) {
    __extends(X509Parameters, _super);
    function X509Parameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalExtensions", elemType: X509Extension }),
        __metadata("design:type", Array)
    ], X509Parameters.prototype, "additionalExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aiaOcspServers" }),
        __metadata("design:type", Array)
    ], X509Parameters.prototype, "aiaOcspServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caOptions" }),
        __metadata("design:type", CaOptions)
    ], X509Parameters.prototype, "caOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyUsage" }),
        __metadata("design:type", KeyUsage)
    ], X509Parameters.prototype, "keyUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyIds", elemType: ObjectId }),
        __metadata("design:type", Array)
    ], X509Parameters.prototype, "policyIds", void 0);
    return X509Parameters;
}(SpeakeasyBase));
export { X509Parameters };
