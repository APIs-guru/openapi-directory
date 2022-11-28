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
import { InTotoProvenance } from "./intotoprovenance";
import { SlsaProvenance } from "./slsaprovenance";
import { SlsaProvenanceZeroTwo } from "./slsaprovenancezerotwo";
import { Subject } from "./subject";
// InTotoStatement
/**
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
**/
var InTotoStatement = /** @class */ (function (_super) {
    __extends(InTotoStatement, _super);
    function InTotoStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_type" }),
        __metadata("design:type", String)
    ], InTotoStatement.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predicateType" }),
        __metadata("design:type", String)
    ], InTotoStatement.prototype, "predicateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provenance" }),
        __metadata("design:type", InTotoProvenance)
    ], InTotoStatement.prototype, "provenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slsaProvenance" }),
        __metadata("design:type", SlsaProvenance)
    ], InTotoStatement.prototype, "slsaProvenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slsaProvenanceZeroTwo" }),
        __metadata("design:type", SlsaProvenanceZeroTwo)
    ], InTotoStatement.prototype, "slsaProvenanceZeroTwo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject", elemType: Subject }),
        __metadata("design:type", Array)
    ], InTotoStatement.prototype, "subject", void 0);
    return InTotoStatement;
}(SpeakeasyBase));
export { InTotoStatement };
