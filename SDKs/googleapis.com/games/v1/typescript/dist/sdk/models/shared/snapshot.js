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
import { SnapshotImage } from "./snapshotimage";
export var SnapshotTypeEnum;
(function (SnapshotTypeEnum) {
    SnapshotTypeEnum["SnapshotTypeUnspecified"] = "SNAPSHOT_TYPE_UNSPECIFIED";
    SnapshotTypeEnum["SaveGame"] = "SAVE_GAME";
})(SnapshotTypeEnum || (SnapshotTypeEnum = {}));
// Snapshot
/**
 * An snapshot object.
**/
var Snapshot = /** @class */ (function (_super) {
    __extends(Snapshot, _super);
    function Snapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverImage" }),
        __metadata("design:type", SnapshotImage)
    ], Snapshot.prototype, "coverImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveId" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationMillis" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "durationMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedMillis" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "lastModifiedMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressValue" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "progressValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueName" }),
        __metadata("design:type", String)
    ], Snapshot.prototype, "uniqueName", void 0);
    return Snapshot;
}(SpeakeasyBase));
export { Snapshot };
