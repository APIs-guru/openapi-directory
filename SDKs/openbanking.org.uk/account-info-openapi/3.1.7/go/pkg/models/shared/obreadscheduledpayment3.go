package shared



type ObReadScheduledPayment3Data struct {
    ScheduledPayment []ObScheduledPayment3 `json:"ScheduledPayment,omitempty"`
    
}

type ObReadScheduledPayment3 struct {
    Data ObReadScheduledPayment3Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    
}

