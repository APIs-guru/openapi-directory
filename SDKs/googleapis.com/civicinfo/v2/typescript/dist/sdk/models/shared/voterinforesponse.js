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
import { Contest } from "./contest";
import { PollingLocation } from "./pollinglocation";
import { Election } from "./election";
import { SimpleAddressType } from "./simpleaddresstype";
import { Precinct } from "./precinct";
import { AdministrationRegion } from "./administrationregion";
// VoterInfoResponse
/**
 * The result of a voter info lookup query.
**/
var VoterInfoResponse = /** @class */ (function (_super) {
    __extends(VoterInfoResponse, _super);
    function VoterInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contests", elemType: Contest }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "contests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropOffLocations", elemType: PollingLocation }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "dropOffLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyVoteSites", elemType: PollingLocation }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "earlyVoteSites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=election" }),
        __metadata("design:type", Election)
    ], VoterInfoResponse.prototype, "election", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], VoterInfoResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailOnly" }),
        __metadata("design:type", Boolean)
    ], VoterInfoResponse.prototype, "mailOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normalizedInput" }),
        __metadata("design:type", SimpleAddressType)
    ], VoterInfoResponse.prototype, "normalizedInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherElections", elemType: Election }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "otherElections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pollingLocations", elemType: PollingLocation }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "pollingLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precinctId" }),
        __metadata("design:type", String)
    ], VoterInfoResponse.prototype, "precinctId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precincts", elemType: Precinct }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "precincts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state", elemType: AdministrationRegion }),
        __metadata("design:type", Array)
    ], VoterInfoResponse.prototype, "state", void 0);
    return VoterInfoResponse;
}(SpeakeasyBase));
export { VoterInfoResponse };
