from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FoodAndDrinkBarExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkBreakfastAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkBreakfastBuffetExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkBuffetExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkDinnerBuffetExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkFreeBreakfastExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkRestaurantExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkRestaurantsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkRoomServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkTableServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class FoodAndDrinkVendingMachineExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class FoodAndDrink:
    bar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bar' }})
    bar_exception: Optional[FoodAndDrinkBarExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barException' }})
    breakfast_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakfastAvailable' }})
    breakfast_available_exception: Optional[FoodAndDrinkBreakfastAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakfastAvailableException' }})
    breakfast_buffet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakfastBuffet' }})
    breakfast_buffet_exception: Optional[FoodAndDrinkBreakfastBuffetExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakfastBuffetException' }})
    buffet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buffet' }})
    buffet_exception: Optional[FoodAndDrinkBuffetExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buffetException' }})
    dinner_buffet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dinnerBuffet' }})
    dinner_buffet_exception: Optional[FoodAndDrinkDinnerBuffetExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dinnerBuffetException' }})
    free_breakfast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBreakfast' }})
    free_breakfast_exception: Optional[FoodAndDrinkFreeBreakfastExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBreakfastException' }})
    restaurant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restaurant' }})
    restaurant_exception: Optional[FoodAndDrinkRestaurantExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restaurantException' }})
    restaurants_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restaurantsCount' }})
    restaurants_count_exception: Optional[FoodAndDrinkRestaurantsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restaurantsCountException' }})
    room_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomService' }})
    room_service_exception: Optional[FoodAndDrinkRoomServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomServiceException' }})
    table_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableService' }})
    table_service_exception: Optional[FoodAndDrinkTableServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableServiceException' }})
    twenty_four_hour_room_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twentyFourHourRoomService' }})
    twenty_four_hour_room_service_exception: Optional[FoodAndDrinkTwentyFourHourRoomServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twentyFourHourRoomServiceException' }})
    vending_machine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendingMachine' }})
    vending_machine_exception: Optional[FoodAndDrinkVendingMachineExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendingMachineException' }})
    
