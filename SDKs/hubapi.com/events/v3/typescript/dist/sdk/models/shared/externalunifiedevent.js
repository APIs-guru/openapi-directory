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
// ExternalUnifiedEvent
/**
 * Used to represent any event. With this format, the `objectType` and `eventType` values are stringified CRM types. Example object:
 * <br/>
 * ```
 *  {
 *       "objectType": "CONTACT",
 *       "objectId": 208451632,
 *       "eventType": "e_visited_page",
 *       "occurredAt": 1567377501421,
 *       "id": "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *       "properties": {
 *           "hs_url": "https://some-website.com/",
 *           "hs_title": "Home",
 *           "hs_referrer": "https://some-other-website.com/blog/why-we-love-big-data-and-you-should-too",
 *           "hs_userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36",
 *           "hs_city": "lund",
 *           "hs_region": "m",
 *           "hs_country": "se",
 *           "hs_session_id" : "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *           "hs_session_source" : "DIRECT"
 *       }
 *   }
 * ```
**/
var ExternalUnifiedEvent = /** @class */ (function (_super) {
    __extends(ExternalUnifiedEvent, _super);
    function ExternalUnifiedEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], ExternalUnifiedEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ExternalUnifiedEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], ExternalUnifiedEvent.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], ExternalUnifiedEvent.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=occurredAt" }),
        __metadata("design:type", Date)
    ], ExternalUnifiedEvent.prototype, "occurredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], ExternalUnifiedEvent.prototype, "properties", void 0);
    return ExternalUnifiedEvent;
}(SpeakeasyBase));
export { ExternalUnifiedEvent };
