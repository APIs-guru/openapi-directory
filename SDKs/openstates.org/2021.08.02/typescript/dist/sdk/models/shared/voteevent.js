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
import { VoteCount } from "./votecount";
import { Organization } from "./organization";
import { Link } from "./link";
import { PersonVote } from "./personvote";
var VoteEvent = /** @class */ (function (_super) {
    __extends(VoteEvent, _super);
    function VoteEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counts", elemType: VoteCount }),
        __metadata("design:type", Array)
    ], VoteEvent.prototype, "counts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], VoteEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], VoteEvent.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motion_classification" }),
        __metadata("design:type", Array)
    ], VoteEvent.prototype, "motionClassification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motion_text" }),
        __metadata("design:type", String)
    ], VoteEvent.prototype, "motionText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", Organization)
    ], VoteEvent.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], VoteEvent.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Link }),
        __metadata("design:type", Array)
    ], VoteEvent.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], VoteEvent.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=votes", elemType: PersonVote }),
        __metadata("design:type", Array)
    ], VoteEvent.prototype, "votes", void 0);
    return VoteEvent;
}(SpeakeasyBase));
export { VoteEvent };
