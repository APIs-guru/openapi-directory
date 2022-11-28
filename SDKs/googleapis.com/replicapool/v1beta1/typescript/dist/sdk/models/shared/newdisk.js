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
import { DiskAttachment } from "./diskattachment";
import { NewDiskInitializeParams } from "./newdiskinitializeparams";
// NewDisk
/**
 * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
**/
var NewDisk = /** @class */ (function (_super) {
    __extends(NewDisk, _super);
    function NewDisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachment" }),
        __metadata("design:type", DiskAttachment)
    ], NewDisk.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoDelete" }),
        __metadata("design:type", Boolean)
    ], NewDisk.prototype, "autoDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boot" }),
        __metadata("design:type", Boolean)
    ], NewDisk.prototype, "boot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializeParams" }),
        __metadata("design:type", NewDiskInitializeParams)
    ], NewDisk.prototype, "initializeParams", void 0);
    return NewDisk;
}(SpeakeasyBase));
export { NewDisk };
