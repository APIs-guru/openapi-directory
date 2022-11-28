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
import { Cvssv3 } from "./cvssv3";
import { Reference } from "./reference";
// Cve
/**
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
**/
var Cve = /** @class */ (function (_super) {
    __extends(Cve, _super);
    function Cve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cvssv3" }),
        __metadata("design:type", Cvssv3)
    ], Cve.prototype, "cvssv3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Cve.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=references", elemType: Reference }),
        __metadata("design:type", Array)
    ], Cve.prototype, "references", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upstreamFixAvailable" }),
        __metadata("design:type", Boolean)
    ], Cve.prototype, "upstreamFixAvailable", void 0);
    return Cve;
}(SpeakeasyBase));
export { Cve };
