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
import { JobEvent } from "./jobevent";
// ClientEvent
/**
 * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
**/
var ClientEvent = /** @class */ (function (_super) {
    __extends(ClientEvent, _super);
    function ClientEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ClientEvent.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], ClientEvent.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventNotes" }),
        __metadata("design:type", String)
    ], ClientEvent.prototype, "eventNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobEvent" }),
        __metadata("design:type", JobEvent)
    ], ClientEvent.prototype, "jobEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ClientEvent.prototype, "requestId", void 0);
    return ClientEvent;
}(SpeakeasyBase));
export { ClientEvent };
