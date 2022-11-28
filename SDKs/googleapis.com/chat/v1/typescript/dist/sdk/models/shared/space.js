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
import { SpaceDetails } from "./spacedetails";
export var SpaceSpaceThreadingStateEnum;
(function (SpaceSpaceThreadingStateEnum) {
    SpaceSpaceThreadingStateEnum["SpaceThreadingStateUnspecified"] = "SPACE_THREADING_STATE_UNSPECIFIED";
    SpaceSpaceThreadingStateEnum["ThreadedMessages"] = "THREADED_MESSAGES";
    SpaceSpaceThreadingStateEnum["GroupedMessages"] = "GROUPED_MESSAGES";
    SpaceSpaceThreadingStateEnum["UnthreadedMessages"] = "UNTHREADED_MESSAGES";
})(SpaceSpaceThreadingStateEnum || (SpaceSpaceThreadingStateEnum = {}));
export var SpaceTypeEnum;
(function (SpaceTypeEnum) {
    SpaceTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    SpaceTypeEnum["Room"] = "ROOM";
    SpaceTypeEnum["Dm"] = "DM";
})(SpaceTypeEnum || (SpaceTypeEnum = {}));
// Space
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
var Space = /** @class */ (function (_super) {
    __extends(Space, _super);
    function Space() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Space.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Space.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUserBotDm" }),
        __metadata("design:type", Boolean)
    ], Space.prototype, "singleUserBotDm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceDetails" }),
        __metadata("design:type", SpaceDetails)
    ], Space.prototype, "spaceDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceThreadingState" }),
        __metadata("design:type", String)
    ], Space.prototype, "spaceThreadingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threaded" }),
        __metadata("design:type", Boolean)
    ], Space.prototype, "threaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Space.prototype, "type", void 0);
    return Space;
}(SpeakeasyBase));
export { Space };
// SpaceInput
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
**/
var SpaceInput = /** @class */ (function (_super) {
    __extends(SpaceInput, _super);
    function SpaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SpaceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SpaceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=singleUserBotDm" }),
        __metadata("design:type", Boolean)
    ], SpaceInput.prototype, "singleUserBotDm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spaceDetails" }),
        __metadata("design:type", SpaceDetails)
    ], SpaceInput.prototype, "spaceDetails", void 0);
    return SpaceInput;
}(SpeakeasyBase));
export { SpaceInput };
