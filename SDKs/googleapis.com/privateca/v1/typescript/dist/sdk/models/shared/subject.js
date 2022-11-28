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
// Subject
/**
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
**/
var Subject = /** @class */ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonName" }),
        __metadata("design:type", String)
    ], Subject.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], Subject.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locality" }),
        __metadata("design:type", String)
    ], Subject.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], Subject.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationalUnit" }),
        __metadata("design:type", String)
    ], Subject.prototype, "organizationalUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], Subject.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=province" }),
        __metadata("design:type", String)
    ], Subject.prototype, "province", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAddress" }),
        __metadata("design:type", String)
    ], Subject.prototype, "streetAddress", void 0);
    return Subject;
}(SpeakeasyBase));
export { Subject };
